import axios, {
	AxiosInstance,
	AxiosResponse,
	RawAxiosRequestHeaders
, AxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";
import { MetariscConfig, OAuth2Options } from "./core";
import { GrantResponse, OAuth2, RefreshResponse } from "./auth/oauth2";
import { setupCache } from "axios-cache-interceptor";
import { Utils } from "./utils";
import { SessionExpiredError } from "./error/SessionExpiredError";

export interface RequestConfig extends AxiosRequestConfig {
	body?: any;
	headers?: { [name: string]: string | string[] };
	params?: { [param: string]: string | string[] };
	endpoint?: string;
}

export enum AuthMethod {
	CLIENT_CREDENTIALS,
	AUTHORIZATION_CODE,
}

export enum EventEnum {
    request = "request",
    response = "response",
    error = "error",
}

export class Client {
	private eventStream = new EventTarget();

	private axios: AxiosInstance;

	private oauth2: OAuth2;
	private access_token?: string;
	private refresh_token?: string;

	private orgId ?: string;

	constructor(config : MetariscConfig) {
		// Paramétrage OAuth2
		this.oauth2 = new OAuth2({
			client_id: config.client_id,
			client_secret: config.client_secret
		});

		// Initialisation du client HTTP
		this.axios = axios.create({
			baseURL: config.metarisc_url ?? "https://api.metarisc.fr/",
			headers: {
				common: this.getDefaultHeaders()
			},
			paramsSerializer: {
				serialize: (params) => {
					const searchParams = new URLSearchParams();

					Object.keys(params).forEach((key) => {
						const value = params[key];
						if (Array.isArray(value)) {
							// Pour les tableaux, répéter le même nom de paramètre sans crochets
							value.forEach((item) => {
								searchParams.append(key, String(item));
							});
						} else if (value !== null && value !== undefined) {
							searchParams.append(key, String(value));
						}
					});

					return searchParams.toString();
				}
			}
		});

		// Axios Interceptors
		// Request interceptors are FILO (First In Last Out)
		// Response interceptors are FIFO (First In First Out)

		// Axios interceptor : Enable HTTP Caching
		// When combining axios-cache-interceptors with other interceptors, you may encounter some inconsistences.
		// See : https://github.com/arthurfiorette/axios-cache-interceptor/issues/449#issuecomment-1370327566
		this.axios = setupCache(this.axios, {
			override: true
		});

		// Axios interceptor : Ajoute l'access token à la requête
		// L'access token peut venir d'un premier authenticate, ou d'un refresh token obtenu au cours des interceptors
		this.axios.interceptors.request.use((config) => {
			config.headers["Authorization"] = this.getAccessToken();
			return config;
		});

		// Axios interceptor : Retry strategy
		axiosRetry(this.axios, {
			retries: 3,
			retryDelay: axiosRetry.exponentialDelay
		});

		// Axios interceptor : Refresh Token (https://datatracker.ietf.org/doc/html/rfc6749#section-1.5)
		this.axios.interceptors.request.use(async (config) => {
			// Si l'access_token a expiré on demande un échange avec le refresh token obtenu précedemment
			// Si le refresh ne fonctionne pas, on ne fait rien
			if (this.getAccessToken() !== undefined && Utils.tokenExpired(this.getAccessToken())) {
				try {
					await this.refreshToken();
				}
				catch(e) {
                    this.emit(EventEnum.error, e);
					throw new SessionExpiredError('La session utilisateur a expirée. ' + e.message);
				}
			}
			return config;
		});
		
		// Si la requête doit être réalisée en tant que membre d'une organisation Metarisc, on injecte son identifiant dans les headers
		// de la requête.
		this.axios.interceptors.request.use((config) => {
			if(this.orgId) {
				config.headers["Metarisc-Org-Id"] = this.orgId;
			}
			return config;
		});
	}

	async authenticate(
		auth_method: AuthMethod,
		options: OAuth2Options
	): Promise<GrantResponse> {
		if (auth_method === AuthMethod.AUTHORIZATION_CODE) {
			const response = await this.oauth2.getAuthorizationCode(options);
			this.setAccessToken(response.token_type + " " + response.access_token);
			this.setRefreshToken(response.refresh_token);
			return response;
		} else if (auth_method === AuthMethod.CLIENT_CREDENTIALS) {
			const response = await this.oauth2.getClientCredentials(options);
			this.setAccessToken(response.token_type + " " + response.access_token);
			return response;
		} else {
			throw new Error("auth_method inconnue");
		}
	}

	async refreshToken(): Promise<RefreshResponse> {
		if (this.refresh_token === undefined) {
			throw new Error('Impossible de refresh sans refresh token');
		}
		try {
			const refreshResponse = await this.oauth2.refreshToken(this.refresh_token);
			this.setAccessToken(refreshResponse.token_type + " " + refreshResponse.access_token);
			this.setRefreshToken(refreshResponse.refresh_token);
			return refreshResponse;
		} catch (e) {
			throw new Error('Erreur pendant la tentative de refresh du token: ' + e.message);
		}
		
	}

	/**
	 * Lance une requête (authentifiée si possible) sur l'API Metarisc.
	 */
	async request<T>(config: RequestConfig): Promise<AxiosResponse<T>> {
		this.emit(EventEnum.request, config);
		return this.axios.request<T>({ ...config, ...{
			method: config.method || "GET",
			url: config.endpoint || "/",
			data: config.body
		} }).then((response) => {
            this.emit(EventEnum.response, response);
            return response;
        });
	}

	protected emit(eventName: EventEnum, payload: unknown) {
        this.eventStream.dispatchEvent(
            new CustomEvent(eventName, { detail: payload })
        );
    }

	public getEventStream(): EventTarget {
		return this.eventStream;
	}

	/**
	 * Définition de l'Access Token
	 */
	setAccessToken(access_token: string): void {
		this.access_token = access_token;
	}

	/**
	 * Récupération de l'Access Token
	 */
	getAccessToken(): string|undefined {
		return this.access_token;
	}

	/**
	 * Définition du Refresh Token
	 */
	setRefreshToken(refresh_token: string): void {
		this.refresh_token = refresh_token;
	}

	/**
	 * Récupération du Refresh Token
	 */
	getRefreshToken(): string|undefined {
		return this.refresh_token;
	}

	/**
	 * Réaliser des appels en tant que membre d'une organisation Metarisc.
	 */
	setActiveOrganisation(orgId: string): void {
		this.orgId = orgId;
	}

	/**
	 * Retourne les headers HTTP par défauts devant être présents dans toutes les requêtes Metarisc.
	 */
	private getDefaultHeaders(): RawAxiosRequestHeaders {
		const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined'; // https://github.com/axios/axios/blob/v1.x/lib/platform/common/utils.js#L1
		const headers: RawAxiosRequestHeaders = {};

		// UA Headers (surcharge le UA uniquement sur un env Server car le navigateur considéra cela comme unsafe)
		if(!hasBrowserEnv) {
			headers["User-Agent"] = "MetariscJs/dev"; // Format User-Agent (https://www.rfc-editor.org/rfc/rfc9110#name-user-agent)
		}
		headers["Metarisc-User-Agent"] = JSON.stringify({
			lang: "js",
			version: 'dev'
		});

		return headers;
	}

	getBaseUrl() : string
	{
		return this.axios.defaults.baseURL;
	}
}

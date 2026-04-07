// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { FeedMessageMessageUtilisateur } from '../model/FeedMessageMessageUtilisateur';
import { FeedMessage } from '../model/FeedMessage';

export class FeedAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'un message existant.
     */
    deleteMessage(
        messageId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'message_id': (new String(messageId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/feed/{message_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération d'une liste de message composant un flux d'activité pour l'utilisateur connecté.
     */
    paginateFeedMessages(
    ) : Collection<FeedMessage>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/feed'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Modifier un message dans le feed général.
     */
    patchMessage(
        messageId: string,
        params : any
    ) : Promise<AxiosResponse<FeedMessageMessageUtilisateur>>
    {
        const pathVariable = { 'message_id': (new String(messageId)).toString() };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/feed/{message_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.redacteur?.roles) {
                    parsedData.redacteur.roles = new Set(parsedData.redacteur.roles);
                }
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajoute un message dans le feed général.
     */
    postMessage(
        params : any
    ) : Promise<AxiosResponse<FeedMessageMessageUtilisateur>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/feed'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.redacteur?.roles) {
                    parsedData.redacteur.roles = new Set(parsedData.redacteur.roles);
                }
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}

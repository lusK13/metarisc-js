import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { TourneeDeci } from '../model/TourneeDeci';
import { TourneeDeciPei } from '../model/TourneeDeciPei';

export class TournesDECIAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails de la tournée DECI.
     */
    async getTourneeDeci(tourneeDeciId: string): Promise<AxiosResponse<TourneeDeci>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}'),
            params: { },
            body: Utils.payloadFilter({})
        });
    }
    
    /**
     * Récupération de la liste des contrôles PEI liés à la tournée DECI.
     */
    paginateTourneeDeciPei(tourneeDeciId: string, page?: number, perPage?: number): Collection<TourneeDeciPei>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString() };
        return this.collect<TourneeDeciPei>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/pei'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString() }
        });
    }
    
    /**
     * Liste des tournées DECI.
     */
    paginateTourneesDeci(page?: number, perPage?: number, libelle?: string, periode?: string): Collection<TourneeDeci>
    {
        const pathVariable = { };
        return this.collect<TourneeDeci>({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci'),
            params: { 'page': page?.toString(), 'per_page': perPage?.toString(), 'libelle': libelle, 'periode': periode }
        });
    }
    
    /**
     * Ajout d'un PEI sur la tournée DECI.
     */
    async postTourneeDeciPei(tourneeDeciId: string, params : { pei_id : string, date_du_controle ? : Date, liste_anomalies ? : { code? : number, a_lever? : boolean }[], essais_engin_utilise ? : string, ordre ? : number }): Promise<AxiosResponse<TourneeDeciPei>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}/pei'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Mise à jour de la tournée DECI.
     */
    async updateTourneeDeci(tourneeDeciId: string, params : { libelle ? : string, description ? : string, date_de_debut ? : Date, date_de_fin ? : Date, mois_debut ? : number, mois_fin ? : number }): Promise<AxiosResponse<TourneeDeci>>
    {
        const pathVariable = { 'tournee_deci_id': (new String(tourneeDeciId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci/{tournee_deci_id}'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'une nouvelle tournée DECI.
     */
    async postTourneeDeci(params : { libelle : string, type : string, date_de_debut : Date, date_de_fin : Date, mois_debut : number, mois_fin : number, description ? : string, modele_id ? : string, }): Promise<AxiosResponse<TourneeDeci>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/tournees_deci'),
            params: { },
            body: Utils.payloadFilter(params)
        });
    }
    
}

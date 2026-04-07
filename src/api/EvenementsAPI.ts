// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Evenement } from '../model/Evenement';
import { Utilisateur } from '../model/Utilisateur';

export class EvenementsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'un événement.
     */
    deleteEvenement(
        evenementId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'evenement_id': (new String(evenementId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/evenements/{evenement_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération des détails d'un événement correspondant à l'id donné.
     */
    getEvenementDetails(
        evenementId: string
    ) : Promise<AxiosResponse<Evenement>>
    {
        const pathVariable = { 'evenement_id': (new String(evenementId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/evenements/{evenement_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération des détails de tous les événements calendaires existants.
     */
    paginateEvenements(
        period? : string,
        type? : 'DEFAUT' | 'RECONNAISSANCE_OPERATIONNELLE_ANNUELLE' | 'VISITE_PERIODIQUE' | 'COMMISSION_SECURITE',
        subjectId? : string
    ) : Collection<Evenement>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/evenements'),
            params: Utils.payloadFilter({
                'period': period === undefined ? undefined : (new String(period)).toString(), 
                'type': type === undefined ? undefined : (new String(type)).toString(), 
                'subject_id': subjectId === undefined ? undefined : (new String(subjectId)).toString()
            }),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération d'une liste paginée d'utilisateurs liés à un événement calendaire.
     */
    paginateEvenementUtilisateurs(
        evenementId: string
    ) : Collection<Utilisateur>
    {
        const pathVariable = { 'evenement_id': (new String(evenementId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/evenements/{evenement_id}/utilisateurs'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Création d'un événement.
     */
    postEvenement(
        params : any
    ) : Promise<AxiosResponse<Evenement>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/evenements'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}

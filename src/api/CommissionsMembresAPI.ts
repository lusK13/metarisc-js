// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { CommissionMembre } from '../model/CommissionMembre';

export class CommissionsMembresAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'un membre de commission existant.
     */
    deleteMembre(
        membreId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'membre_id': (new String(membreId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/commissions_membres/{membre_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération d'une fiche d'un membre d'une commission.
     */
    getMembre(
        membreId: string
    ) : Promise<AxiosResponse<CommissionMembre>>
    {
        const pathVariable = { 'membre_id': (new String(membreId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions_membres/{membre_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste membres des commissions.
     */
    paginateMembres(
    ) : Collection<CommissionMembre>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions_membres'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Mise à jour d'un membre de commission existant en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    updateMembre(
        membreId: string,
        params : any
    ) : Promise<AxiosResponse<CommissionMembre>>
    {
        const pathVariable = { 'membre_id': (new String(membreId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions_membres/{membre_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}

// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { DossierAffectation } from '../model/DossierAffectation';

export class DossiersAffectationsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'une affectation d'un dossier.
     */
    deleteAffectation(
        affectationId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'affectation_id': (new String(affectationId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/dossiers_affectations/{affectation_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Mise à jour d'une affectation existante en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    postAffectation(
        affectationId: string,
        params : any
    ) : Promise<AxiosResponse<DossierAffectation>>
    {
        const pathVariable = { 'affectation_id': (new String(affectationId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers_affectations/{affectation_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.utilisateur?.roles) {
                    parsedData.utilisateur.roles = new Set(parsedData.utilisateur.roles);
                }
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}

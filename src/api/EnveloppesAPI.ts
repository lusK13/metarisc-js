// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Enveloppe } from '../model/Enveloppe';

export class EnveloppesAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'une enveloppe (cette opération n'impacte pas les dossiers liés).
     */
    deleteEnveloppe(
        enveloppeId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'enveloppe_id': (new String(enveloppeId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/enveloppes/{enveloppe_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de l'ensemble des données d'une enveloppe.
     */
    getEnveloppe(
        enveloppeId: string
    ) : Promise<AxiosResponse<Enveloppe>>
    {
        const pathVariable = { 'enveloppe_id': (new String(enveloppeId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/enveloppes/{enveloppe_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des enveloppes selon des critères de recherche.
     */
    paginateEnveloppe(
        sort? : 'titre' | '-titre',
        titre? : string
    ) : Collection<Enveloppe>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/enveloppes'),
            params: Utils.payloadFilter({
                'sort': sort === undefined ? undefined : (new String(sort)).toString(), 
                'titre': titre === undefined ? undefined : (new String(titre)).toString()
            }),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Mise à jour d'une nouvelle enveloppe.
     */
    patchEnveloppe(
        enveloppeId: string,
        params : any
    ) : Promise<AxiosResponse<Enveloppe>>
    {
        const pathVariable = { 'enveloppe_id': (new String(enveloppeId)).toString() };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/enveloppes/{enveloppe_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Création d'une nouvelle enveloppe.
     */
    post(
        params : any
    ) : Promise<AxiosResponse<Enveloppe>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/enveloppes'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}

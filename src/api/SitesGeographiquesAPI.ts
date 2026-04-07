// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { SiteGeographique } from '../model/SiteGeographique';

export class SitesGeographiquesAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'un site géographique (cette opération n'impacte pas les ERP liés).
     */
    deleteSiteGeographique(
        siteGeographiqueId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'site_geographique_id': (new String(siteGeographiqueId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/sites_geographiques/{site_geographique_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de l'ensemble des données d'un site géographique.
     */
    getSiteGeographique(
        siteGeographiqueId: string
    ) : Promise<AxiosResponse<SiteGeographique>>
    {
        const pathVariable = { 'site_geographique_id': (new String(siteGeographiqueId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/sites_geographiques/{site_geographique_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des sites géographiques selon des critères de recherche.
     */
    paginate(
        sort? : 'libelle' | '-libelle',
        libelle? : string
    ) : Collection<SiteGeographique>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/sites_geographiques'),
            params: Utils.payloadFilter({
                'sort': sort === undefined ? undefined : (new String(sort)).toString(), 
                'libelle': libelle === undefined ? undefined : (new String(libelle)).toString()
            }),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Mise à jour d'un site géographique.
     */
    patchSiteGeographique(
        siteGeographiqueId: string,
        params : any
    ) : Promise<AxiosResponse<SiteGeographique>>
    {
        const pathVariable = { 'site_geographique_id': (new String(siteGeographiqueId)).toString() };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/sites_geographiques/{site_geographique_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Création d'un site géographique.
     */
    post(
        params : any
    ) : Promise<AxiosResponse<SiteGeographique>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/sites_geographiques'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}

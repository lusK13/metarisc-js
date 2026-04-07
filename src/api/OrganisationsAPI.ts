// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Organisation } from '../model/Organisation';
import { OrganisationGeoservice } from '../model/OrganisationGeoservice';
import { OrganisationMembre } from '../model/OrganisationMembre';
import { OrganisationPreferences } from '../model/OrganisationPreferences';
import { ReglesDeci } from '../model/ReglesDeci';
import { PermissionOrg } from '../model/PermissionOrg';
import { WorkflowType } from '../model/WorkflowType';

export class OrganisationsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails d'une organisation.
     */
    getOrganisation(
        orgId: string
    ) : Promise<AxiosResponse<Organisation>>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Ensemble des permissions de l'utilisateur connecté sur l'organisation.
     */
    getPermissionsOrg(
        orgId: string
    ) : Promise<AxiosResponse<{data: PermissionOrg[]}>>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/permissions'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Ensemble des paramétrages et des configurations liés aux règles métiers de l'organisation.
     */
    getOrganisationPreferences(
        orgId: string
    ) : Promise<AxiosResponse<OrganisationPreferences>>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/preferences'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Ensemble de règles utilisées pour le calcul de la conformité et de la performance DECI.
     */
    getOrganisationReglesDeci(
        orgId: string
    ) : Promise<AxiosResponse<ReglesDeci>>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/regles-deci'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.pibi_performance_natures_performance_restreinte) {
                    parsedData.pibi_performance_natures_performance_restreinte = new Set(parsedData.pibi_performance_natures_performance_restreinte);
                }
                if (parsedData && parsedData.pibi_performance_natures_a_reformer) {
                    parsedData.pibi_performance_natures_a_reformer = new Set(parsedData.pibi_performance_natures_a_reformer);
                }
                return parsedData;
            }]
        });
    }
    
    /**
     * Retourne le référentiel du paramétrage des workflows pour l'organisation.
     */
    paginateOrganisationDossiersWorkflowsSuites(
        orgId: string
    ) : Collection<WorkflowType>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/dossiers-workflows-suites'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des géo-services d'une organisation.
     */
    paginateOrganisationGeoservices(
        orgId: string
    ) : Collection<OrganisationGeoservice>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/geoservices'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des membres d'une organisation.
     */
    paginateOrganisationMembres(
        orgId: string,
        lastName? : string
    ) : Collection<OrganisationMembre>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/membres'),
            params: Utils.payloadFilter({
                'last_name': lastName === undefined ? undefined : (new String(lastName)).toString()
            }),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Liste paginée des organisations.
     */
    paginateOrganisations(
    ) : Collection<Organisation>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/organisations'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Ajout d'un un géo-service à une organisation.
     */
    postOrganisationGeoservices(
        orgId: string,
        params : any
    ) : Promise<AxiosResponse<OrganisationGeoservice>>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/geoservices'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un utilisateur comme membre dans une organisation.
     */
    addOrganisationMembres(
        orgId: string,
        params : any
    ) : Promise<AxiosResponse<OrganisationMembre>>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/membres'),
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
    
    /**
     * Mise à jour des préférences de l'organisation en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    updateOrganisationPreferences(
        orgId: string,
        params : any
    ) : Promise<AxiosResponse<OrganisationPreferences>>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/preferences'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Mise à jour de l'ensemble des règles utilisées pour le calcul de la conformité et de la performance DECI en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    postOrganisationReglesDeci(
        orgId: string,
        params : any
    ) : Promise<AxiosResponse<ReglesDeci>>
    {
        const pathVariable = { 'org_id': (new String(orgId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/organisations/{org_id}/regles-deci'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.pibi_performance_natures_performance_restreinte) {
                    parsedData.pibi_performance_natures_performance_restreinte = new Set(parsedData.pibi_performance_natures_performance_restreinte);
                }
                if (parsedData && parsedData.pibi_performance_natures_a_reformer) {
                    parsedData.pibi_performance_natures_a_reformer = new Set(parsedData.pibi_performance_natures_a_reformer);
                }
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}

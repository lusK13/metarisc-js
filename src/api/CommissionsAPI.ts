// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Commission } from '../model/Commission';
import { CommissionMembre } from '../model/CommissionMembre';
import { CommissionPreferences } from '../model/CommissionPreferences';
import { PassageCommission } from '../model/PassageCommission';

export class CommissionsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails de la commission.
     */
    getCommission(
        commissionId: string
    ) : Promise<AxiosResponse<Commission>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération des préférences de la commission.
     */
    getCommissionPreferences(
        commissionId: string
    ) : Promise<AxiosResponse<CommissionPreferences>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/preferences'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Liste des commissions.
     */
    paginateCommissions(
        libelle? : string,
        type? : 'Sous-commission départementale' | 'Commission communale' | 'Commission intercommunale' | 'Commission d\'arrondissement' | 'CoDERST'
    ) : Collection<Commission>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions'),
            params: Utils.payloadFilter({
                'libelle': libelle === undefined ? undefined : (new String(libelle)).toString(), 
                'type': type === undefined ? undefined : (new String(type)).toString()
            }),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des dates de passage de la commission. Cela peut représenter une visite périodique sur site de la commission, ou un passage en salle.
     */
    paginateCommissionDates(
        commissionId: string,
        fromDate? : Date,
        type? : 'salle' | 'visite_reception_travaux_en_groupe_de_visite' | 'visite_reception_avant_ouverture_en_groupe_de_visite' | 'visite_periodique_en_groupe_de_visite' | 'visite_inopinee_en_groupe_de_visite' | 'visite_controle_en_groupe_de_visite' | 'visite_chantier_en_groupe_de_visite' | 'visite_conseil_en_groupe_de_visite' | 'visite_reception_travaux_en_pleniere' | 'visite_reception_avant_ouverture_en_pleniere' | 'visite_periodique_en_pleniere' | 'visite_inopinee_en_pleniere' | 'visite_controle_en_pleniere' | 'visite_chantier_en_pleniere' | 'visite_conseil_en_pleniere'
    ) : Collection<PassageCommission>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates'),
            params: Utils.payloadFilter({
                'from_date': fromDate === undefined ? undefined : Utils.formatDate(fromDate), 
                'type': type === undefined ? undefined : (new String(type)).toString()
            }),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des membres de la commission.
     */
    paginateCommissionMembres(
        commissionId: string,
        commission? : string
    ) : Collection<CommissionMembre>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/membres'),
            params: Utils.payloadFilter({
                'commission': commission === undefined ? undefined : (new String(commission)).toString()
            }),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Modification d'une commission existant en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    patchCommission(
        commissionId: string,
        params : any
    ) : Promise<AxiosResponse<Commission>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Modification d'un passage en commission existant en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    patchPassageDatesCommission(
        commissionId: string,
        passageId: string,
        params : any
    ) : Promise<AxiosResponse<PassageCommission>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString(), 'passage_id': (new String(passageId)).toString() };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates/{passage_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajoute une commission.
     */
    postCommission(
        params : any
    ) : Promise<AxiosResponse<Commission>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'une date de passage en commission.
     */
    postCommissionDate(
        commissionId: string,
        params : any
    ) : Promise<AxiosResponse<PassageCommission>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/dates'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un membre dans la commission.
     */
    postMembresCommission(
        commissionId: string,
        params : any
    ) : Promise<AxiosResponse<CommissionMembre>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/membres'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Mise à jour des préférences de la commission en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    postCommissionPreferences(
        commissionId: string,
        params : any
    ) : Promise<AxiosResponse<CommissionPreferences>>
    {
        const pathVariable = { 'commission_id': (new String(commissionId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/commissions/{commission_id}/preferences'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}

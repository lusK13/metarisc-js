// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { PassageCommissionDossier } from '../model/PassageCommissionDossier';
import { PrescriptionAnalyseDeRisque } from '../model/PrescriptionAnalyseDeRisque';

export class OrdresDuJourAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression du dossier de l'ordre du jour d'une date de passage en commission.
     */
    deleteCommissionDateDossier(
        dossierId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/ordres_du_jour/{dossier_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * L'export du compte rendu résume le contenu du passage en commission de sécurité. Il précise notamment la position individuelle de chaque membre.  Etabli à l’issue de la réunion, il est signé du président de séance, approuvé par les membres et conservé au dossier par le SDIS. Le PDF généré est un document de synthèse qui reprend les informations de la commission, en se basant sur le modèle de rapport de l'organisation. La génération du PDF est une opération qui peut être longue, en fonction de la taille et du nombre d'éléments à exporter.
     */
    getCompteRenduPdfDossier(
        dossierId: string
    ) : Promise<AxiosResponse<Blob>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            responseType: 'blob',
            endpoint: Utils.constructPath(pathVariable, '/ordres_du_jour/{dossier_id}/compte_rendu_pdf')
        });
    }
    
    /**
     * Liste des prescriptions sur un dossier à l'ordre du jour d'une date de passage en commission. Les prescriptions sont ordonnées par leur numéro d'ordre.
     */
    getPrescriptionsDossier(
        dossierId: string
    ) : Promise<AxiosResponse<{data: PrescriptionAnalyseDeRisque[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/ordres_du_jour/{dossier_id}/prescriptions'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Le procès verbal est le document officiel de la commission de sécurité remis à l’autorité de police compétente. Il contient l’avis unique prononcé, exprimant la position collégiale de la commission. Le PDF généré est un document de synthèse qui reprend les informations de la commission, en se basant sur le modèle de rapport de l'organisation. La génération du PDF est une opération qui peut être longue, en fonction de la taille et du nombre d'éléments à exporter.
     */
    getProcesVerbalPdfDossier(
        dossierId: string
    ) : Promise<AxiosResponse<Blob>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            responseType: 'blob',
            endpoint: Utils.constructPath(pathVariable, '/ordres_du_jour/{dossier_id}/proces_verbal_pdf')
        });
    }
    
    /**
     * Mise à jour des détails d'un dossier lié à une date de passage en commission en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    updateCommissionDateDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<PassageCommissionDossier>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/ordres_du_jour/{dossier_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.dossier.createur?.roles) {
                    parsedData.dossier.createur.roles = new Set(parsedData.dossier.createur.roles);
                }
                if (parsedData && parsedData.dossier.modules) {
                    parsedData.dossier.modules = new Set(parsedData.dossier.modules);
                }
                if (parsedData && parsedData.dossier.workflows_actifs) {
                    parsedData.dossier.workflows_actifs = new Set(parsedData.dossier.workflows_actifs);
                }
                if (parsedData && parsedData.dossier.erp.descriptif_technique.analyse_risque?.activites_secondaire) {
                    parsedData.dossier.erp.descriptif_technique.analyse_risque.activites_secondaire = new Set(parsedData.dossier.erp.descriptif_technique.analyse_risque.activites_secondaire);
                }
                if (parsedData && parsedData.dossier.erp.descriptif_technique.analyse_risque?.type_cloisonnement) {
                    parsedData.dossier.erp.descriptif_technique.analyse_risque.type_cloisonnement = new Set(parsedData.dossier.erp.descriptif_technique.analyse_risque.type_cloisonnement);
                }
                if (parsedData && parsedData.dossier.erp.descriptif_technique.analyse_risque?.type_de_chauffage) {
                    parsedData.dossier.erp.descriptif_technique.analyse_risque.type_de_chauffage = new Set(parsedData.dossier.erp.descriptif_technique.analyse_risque.type_de_chauffage);
                }
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'une prescription sur un dossier à l'ordre du jour à une date de passage en commission. La prescription est ajoutée à dans l'avis posé par la commission sur le dossier.
     */
    postPrescriptionsDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<PrescriptionAnalyseDeRisque>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/ordres_du_jour/{dossier_id}/prescriptions'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Réorganiser les numéros d'ordre des prescriptions d'un ordre du jour d'un dossier. Cela permet de mettre à jour simplement les numéros d'ordre des prescriptions.
     */
    postReorganiserPrescriptionsDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<{data: PrescriptionAnalyseDeRisque[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/ordres_du_jour/{dossier_id}/prescriptions/reorganiser'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}

// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Contact } from '../model/Contact';
import { Derogation } from '../model/Derogation';
import { Dossier } from '../model/Dossier';
import { DossierAffectation } from '../model/DossierAffectation';
import { FilRougeMessage } from '../model/FilRougeMessage';
import { PieceJointe } from '../model/PieceJointe';
import { PrescriptionAnalyseDeRisque } from '../model/PrescriptionAnalyseDeRisque';
import { RapportEtude } from '../model/RapportEtude';
import { RapportVisite } from '../model/RapportVisite';
import { Essai } from '../model/Essai';
import { PermissionDossier } from '../model/PermissionDossier';
import { Tag } from '../model/Tag';
import { Workflow } from '../model/Workflow';

export class DossiersAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Désarchiver le dossier.
     */
    deleteArchiverDossier(
        dossierId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/archiver'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Liste des affectations du dossier.
     */
    getAffectationsDossier(
        dossierId: string
    ) : Promise<AxiosResponse<{data: DossierAffectation[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/affectations'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des dérogations associées à un dossier spécifique.
     */
    getDerogationsDossier(
        dossierId: string
    ) : Promise<AxiosResponse<Derogation>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/derogations'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de l'ensemble des données d'un dossier.
     */
    getDossier(
        dossierId: string
    ) : Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.createur?.roles) {
                    parsedData.createur.roles = new Set(parsedData.createur.roles);
                }
                if (parsedData && parsedData.modules) {
                    parsedData.modules = new Set(parsedData.modules);
                }
                if (parsedData && parsedData.workflows_actifs) {
                    parsedData.workflows_actifs = new Set(parsedData.workflows_actifs);
                }
                if (parsedData && parsedData.erp.descriptif_technique.analyse_risque?.activites_secondaire) {
                    parsedData.erp.descriptif_technique.analyse_risque.activites_secondaire = new Set(parsedData.erp.descriptif_technique.analyse_risque.activites_secondaire);
                }
                if (parsedData && parsedData.erp.descriptif_technique.analyse_risque?.type_cloisonnement) {
                    parsedData.erp.descriptif_technique.analyse_risque.type_cloisonnement = new Set(parsedData.erp.descriptif_technique.analyse_risque.type_cloisonnement);
                }
                if (parsedData && parsedData.erp.descriptif_technique.analyse_risque?.type_de_chauffage) {
                    parsedData.erp.descriptif_technique.analyse_risque.type_de_chauffage = new Set(parsedData.erp.descriptif_technique.analyse_risque.type_de_chauffage);
                }
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération des essais réalisés d'un dossier de visite.
     */
    getEssaisDossier(
        dossierId: string
    ) : Promise<AxiosResponse<{data: Essai[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/essais'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * L'export du rapport d'étude est une opération qui permet de récupérer un fichier PDF contenant l'ensemble des éléments du dossier d'étude. Le SIS réalise pour chaque étude ou visite un rapport détaillé par ERP. Ce document est présenté en commission par le sapeur pompier préventionniste en sa qualité de rapporteur et de technicien du risque. Le PDF généré est un document de synthèse qui reprend les informations du dossier, en se basant sur le modèle de rapport de l'organisation. L'export du dossier est une opération qui peut être longue, en fonction de la taille du dossier et du nombre d'éléments à exporter.
     */
    getPdfRapportEtudeDossier(
        dossierId: string
    ) : Promise<AxiosResponse<Blob>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            responseType: 'blob',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_etude/pdf')
        });
    }
    
    /**
     * Ensemble des permissions de l'utilisateur connecté sur le dossier.
     */
    getPermissionsDossier(
        dossierId: string
    ) : Promise<AxiosResponse<{data: PermissionDossier[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/permissions'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des prescriptions sur le rapport d'étude.
     */
    getPrescriptionsRapportEtudeDossier(
        dossierId: string
    ) : Promise<AxiosResponse<{data: PrescriptionAnalyseDeRisque[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_etude/prescriptions'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération des détails du rapport d'étude.
     */
    getRapportEtudeDossier(
        dossierId: string
    ) : Promise<AxiosResponse<RapportEtude>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_etude'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.analyse_risque?.activites_secondaire) {
                    parsedData.analyse_risque.activites_secondaire = new Set(parsedData.analyse_risque.activites_secondaire);
                }
                if (parsedData && parsedData.analyse_risque?.type_cloisonnement) {
                    parsedData.analyse_risque.type_cloisonnement = new Set(parsedData.analyse_risque.type_cloisonnement);
                }
                if (parsedData && parsedData.analyse_risque?.type_de_chauffage) {
                    parsedData.analyse_risque.type_de_chauffage = new Set(parsedData.analyse_risque.type_de_chauffage);
                }
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération des détails du rapport de visite.
     */
    getRapportVisiteDossier(
        dossierId: string
    ) : Promise<AxiosResponse<RapportVisite>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_visite'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des tags d'un dossier.
     */
    paginateDossierTags(
        dossierId: string
    ) : Promise<AxiosResponse<{data: Tag[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/tags'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des contacts.
     */
    paginateDossierContacts(
        dossierId: string
    ) : Collection<Contact>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/contacts'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des documents.
     */
    paginateDossierDocuments(
        dossierId: string
    ) : Collection<PieceJointe>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/documents'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des dossiers selon des critères de recherche.
     */
    paginateDossiers(
        sort? : 'date_de_creation' | '-date_de_creation',
        objet? : string,
        erp? : string,
        pei? : string,
        type? : string | Array<string>,
        workflowActif? : 'analyse_de_risque' | 'validation' | 'arrivee_sis' | 'arrivee_sis_prev' | 'arrivee_secretariat_commission' | 'consultation_sis' | 'passage_commission' | 'relecture' | 'visite' | 'arrivee_secretariat' | 'workflow' | 'reception_de_travaux_en_attente',
        affecte? : string,
        enveloppe? : string,
        numeroUrba? : string
    ) : Collection<Dossier>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers'),
            params: Utils.payloadFilter({
                'sort': sort === undefined ? undefined : (new String(sort)).toString(), 
                'objet': objet === undefined ? undefined : (new String(objet)).toString(), 
                'erp': erp === undefined ? undefined : (new String(erp)).toString(), 
                'pei': pei === undefined ? undefined : (new String(pei)).toString(), 
                'type': type === undefined ? undefined : (new String(type)).toString(), 
                'workflow_actif': workflowActif === undefined ? undefined : (new String(workflowActif)).toString(), 
                'affecte': affecte === undefined ? undefined : (new String(affecte)).toString(), 
                'enveloppe': enveloppe === undefined ? undefined : (new String(enveloppe)).toString(), 
                'numero_urba': numeroUrba === undefined ? undefined : (new String(numeroUrba)).toString()
            }),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Consulter l'espace d'échange pour le suivi du dossier.
     */
    paginateDossierFilRouge(
        dossierId: string
    ) : Collection<FilRougeMessage>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/fil_rouge'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des workflows d'un dossier.
     */
    paginateDossierWorkflows(
        dossierId: string
    ) : Collection<Workflow>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/workflows'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Ajoute une affectation à un dossier. Vous pouvez affecter plusieurs personnes au dossier, y compris vous-même. Cela permet de débloquer des droits spécifiques sur le traitement du dossier.
     */
    postAffectationsDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<DossierAffectation>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/affectations'),
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
     * Ajout d'un contact.
     */
    postContactsDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<Contact>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/contacts'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Mise a jour d'une dérogation dans un dossier.
     */
    postDerogationsDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<Derogation>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/derogations'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un document.
     */
    postDocumentsDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/documents'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Modification d'un dossier existant en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    patchDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.createur?.roles) {
                    parsedData.createur.roles = new Set(parsedData.createur.roles);
                }
                if (parsedData && parsedData.modules) {
                    parsedData.modules = new Set(parsedData.modules);
                }
                if (parsedData && parsedData.workflows_actifs) {
                    parsedData.workflows_actifs = new Set(parsedData.workflows_actifs);
                }
                if (parsedData && parsedData.erp.descriptif_technique.analyse_risque?.activites_secondaire) {
                    parsedData.erp.descriptif_technique.analyse_risque.activites_secondaire = new Set(parsedData.erp.descriptif_technique.analyse_risque.activites_secondaire);
                }
                if (parsedData && parsedData.erp.descriptif_technique.analyse_risque?.type_cloisonnement) {
                    parsedData.erp.descriptif_technique.analyse_risque.type_cloisonnement = new Set(parsedData.erp.descriptif_technique.analyse_risque.type_cloisonnement);
                }
                if (parsedData && parsedData.erp.descriptif_technique.analyse_risque?.type_de_chauffage) {
                    parsedData.erp.descriptif_technique.analyse_risque.type_de_chauffage = new Set(parsedData.erp.descriptif_technique.analyse_risque.type_de_chauffage);
                }
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajoute un message dans le fil rouge d'un dossier pour l'utilisateur connecté.
     */
    postFilRougeDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<FilRougeMessage>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/fil_rouge'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.auteur?.roles) {
                    parsedData.auteur.roles = new Set(parsedData.auteur.roles);
                }
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'une prescription sur le rapport d'étude.
     */
    postPrescriptionsRapportEtudeDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<PrescriptionAnalyseDeRisque>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_etude/prescriptions'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Mise à jour du rapport d'étude en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    postRapportEtudeDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<RapportEtude>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_etude'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.analyse_risque?.activites_secondaire) {
                    parsedData.analyse_risque.activites_secondaire = new Set(parsedData.analyse_risque.activites_secondaire);
                }
                if (parsedData && parsedData.analyse_risque?.type_cloisonnement) {
                    parsedData.analyse_risque.type_cloisonnement = new Set(parsedData.analyse_risque.type_cloisonnement);
                }
                if (parsedData && parsedData.analyse_risque?.type_de_chauffage) {
                    parsedData.analyse_risque.type_de_chauffage = new Set(parsedData.analyse_risque.type_de_chauffage);
                }
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Mise à jour du rapport de visite en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    postRapportVisiteDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<RapportVisite>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_visite'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Réorganiser les numéros d'ordre des prescriptions du rapport d'étude. Cela permet de mettre à jour simplement les numéros d'ordre des prescriptions du rapport d'étude.
     */
    postReorganiserPrescriptionsRapportEtudeDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<{data: PrescriptionAnalyseDeRisque[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/rapport_etude/prescriptions/reorganiser'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Permet de remplacer les tags d'un dossier existant par les valeurs transmis. Si un tableau vide est envoyé, les tags seront réinitialisés.
     */
    postTagsDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<{data: Tag[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/tags'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Archiver le dossier.
     */
    putArchiverDossier(
        dossierId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'PUT',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/archiver'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Mise à jour des essais réalisés en définissant les valeurs des paramètres transmis.
     */
    putEssaisDossier(
        dossierId: string,
        params : any
    ) : Promise<AxiosResponse<{data: Essai[]}>>
    {
        const pathVariable = { 'dossier_id': (new String(dossierId)).toString() };
        return this.request({
            method: 'PUT',
            endpoint: Utils.constructPath(pathVariable, '/dossiers/{dossier_id}/essais'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}

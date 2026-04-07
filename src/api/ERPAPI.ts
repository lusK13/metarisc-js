// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Contact } from '../model/Contact';
import { Dossier } from '../model/Dossier';
import { ERP } from '../model/ERP';
import { MainCourante } from '../model/MainCourante';
import { PieceJointe } from '../model/PieceJointe';
import { PermissionErp } from '../model/PermissionErp';
import { ReferenceExterieure } from '../model/ReferenceExterieure';
import { DescriptifTechniqueERPBase } from '../model/DescriptifTechniqueERPBase';
import { Prescription } from '../model/Prescription';
import { PrescriptionSupportReglementaire } from '../model/PrescriptionSupportReglementaire';

export class ERPAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails de l'ERP.
     */
    getErp(
        erpId: string
    ) : Promise<AxiosResponse<ERP>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.descriptif_technique.analyse_risque?.activites_secondaire) {
                    parsedData.descriptif_technique.analyse_risque.activites_secondaire = new Set(parsedData.descriptif_technique.analyse_risque.activites_secondaire);
                }
                if (parsedData && parsedData.descriptif_technique.analyse_risque?.type_cloisonnement) {
                    parsedData.descriptif_technique.analyse_risque.type_cloisonnement = new Set(parsedData.descriptif_technique.analyse_risque.type_cloisonnement);
                }
                if (parsedData && parsedData.descriptif_technique.analyse_risque?.type_de_chauffage) {
                    parsedData.descriptif_technique.analyse_risque.type_de_chauffage = new Set(parsedData.descriptif_technique.analyse_risque.type_de_chauffage);
                }
                return parsedData;
            }]
        });
    }
    
    /**
     * Ensemble des permissions de l'utilisateur connecté sur l'ERP.
     */
    getPermissionsErp(
        erpId: string
    ) : Promise<AxiosResponse<{data: PermissionErp[]}>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/permissions'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de toutes les références extérieures de l'objet.
     */
    getReferencesExterieuresErp(
        erpId: string
    ) : Promise<AxiosResponse<{data: ReferenceExterieure[]}>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/references_exterieures'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des contacts.
     */
    paginateErpContacts(
        erpId: string
    ) : Collection<Contact>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/contacts'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des documents.
     */
    paginateErpDocuments(
        erpId: string
    ) : Collection<PieceJointe>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/documents'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des dossiers. Cet endpoint partage certains paramètres de filtrage de /dossiers.
     */
    paginateErpDossiers(
        erpId: string,
        sort? : 'date_de_creation' | '-date_de_creation',
        objet? : string,
        type? : string | Array<string>,
        workflowActif? : 'analyse_de_risque' | 'validation' | 'arrivee_sis' | 'arrivee_sis_prev' | 'arrivee_secretariat_commission' | 'consultation_sis' | 'passage_commission' | 'relecture' | 'visite' | 'arrivee_secretariat' | 'workflow' | 'reception_de_travaux_en_attente',
        affecte? : string,
        enveloppe? : string,
        numeroUrba? : string
    ) : Collection<Dossier>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/dossiers'),
            params: Utils.payloadFilter({
                'sort': sort === undefined ? undefined : (new String(sort)).toString(), 
                'objet': objet === undefined ? undefined : (new String(objet)).toString(), 
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
     * Récupération de la liste des Établissements Recevant du Public (ERP) selon des critères de recherche.
     */
    paginateErp(
        sort? : 'libelle' | '-libelle',
        libelle? : string,
        geojson? : string,
        referencesExterieures? : string | Array<string>,
        presenceLocauxSommeil? : boolean,
        typeActivite? : string | Array<string>,
        avisExploitation? : 'favorable' | 'defavorable',
        aVisiterEn? : string,
        siteGeographique? : string,
        commissionConcernee? : string,
        categorie? : 1 | 2 | 3 | 4 | 5,
        erpRattacheA? : string,
        titulaires? : string,
        genre? : 'cellule' | 'erp'
    ) : Collection<ERP>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp'),
            params: Utils.payloadFilter({
                'sort': sort === undefined ? undefined : (new String(sort)).toString(), 
                'libelle': libelle === undefined ? undefined : (new String(libelle)).toString(), 
                'geojson': geojson === undefined ? undefined : (new String(geojson)).toString(), 
                'references_exterieures': referencesExterieures === undefined ? undefined : (new String(referencesExterieures)).toString(), 
                'presence_locaux_sommeil': presenceLocauxSommeil === undefined ? undefined : (new String(presenceLocauxSommeil)).toString(), 
                'type_activite': typeActivite === undefined ? undefined : (new String(typeActivite)).toString(), 
                'avis_exploitation': avisExploitation === undefined ? undefined : (new String(avisExploitation)).toString(), 
                'a_visiter_en': aVisiterEn === undefined ? undefined : (new String(aVisiterEn)).toString(), 
                'site_geographique': siteGeographique === undefined ? undefined : (new String(siteGeographique)).toString(), 
                'commission_concernee': commissionConcernee === undefined ? undefined : (new String(commissionConcernee)).toString(), 
                'categorie': categorie === undefined ? undefined : (new String(categorie)).toString(), 
                'erp_rattache_a': erpRattacheA === undefined ? undefined : (new String(erpRattacheA)).toString(), 
                'titulaires': titulaires === undefined ? undefined : (new String(titulaires)).toString(), 
                'genre': genre === undefined ? undefined : (new String(genre)).toString()
            }),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de l'historique d'un ERP.
     */
    paginateErpHistorique(
        erpId: string
    ) : Collection<DescriptifTechniqueERPBase>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/historique'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des mains courantes.
     */
    paginateErpMainsCourantes(
        erpId: string,
        sort? : 'date' | '-date'
    ) : Collection<MainCourante>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/mains_courantes'),
            params: Utils.payloadFilter({
                'sort': sort === undefined ? undefined : (new String(sort)).toString()
            }),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Retourne la liste des prescriptions soulevées dans les visites et les études de l'ERP.
     */
    paginateErpPrescriptions(
        erpId: string
    ) : Collection<Prescription>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/prescriptions'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Retourne la liste des textes applicables d'un ERP en fonction de son type d'activité.
     */
    paginateTextesApplicables(
        erpId: string
    ) : Collection<PrescriptionSupportReglementaire>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/textes_applicables'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Créez ou mettez à jour des références extérieures. L'utilisation d'une valeur null pour une référence extérieure supprimera ou « annulera » la valeur de la propriété de la référence extérieure.
     */
    patchReferencesExterieuresErp(
        erpId: string,
        params : any
    ) : Promise<AxiosResponse<{data: ReferenceExterieure[]}>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/references_exterieures'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un contact.
     */
    postContactsErp(
        erpId: string,
        params : any
    ) : Promise<AxiosResponse<Contact>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/contacts'),
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
    postDocumentsErp(
        erpId: string,
        params : any
    ) : Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/documents'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'un dossier.
     */
    postDossiersErp(
        erpId: string,
        params : any
    ) : Promise<AxiosResponse<Dossier>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/dossiers'),
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
     * Création d'un nouveau ERP.
     */
    post(
        params : any
    ) : Promise<AxiosResponse<ERP>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.descriptif_technique.analyse_risque?.activites_secondaire) {
                    parsedData.descriptif_technique.analyse_risque.activites_secondaire = new Set(parsedData.descriptif_technique.analyse_risque.activites_secondaire);
                }
                if (parsedData && parsedData.descriptif_technique.analyse_risque?.type_cloisonnement) {
                    parsedData.descriptif_technique.analyse_risque.type_cloisonnement = new Set(parsedData.descriptif_technique.analyse_risque.type_cloisonnement);
                }
                if (parsedData && parsedData.descriptif_technique.analyse_risque?.type_de_chauffage) {
                    parsedData.descriptif_technique.analyse_risque.type_de_chauffage = new Set(parsedData.descriptif_technique.analyse_risque.type_de_chauffage);
                }
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Mise à jour des détails d'un ERP en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    postErp(
        erpId: string,
        params : any
    ) : Promise<AxiosResponse<ERP>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.descriptif_technique.analyse_risque?.activites_secondaire) {
                    parsedData.descriptif_technique.analyse_risque.activites_secondaire = new Set(parsedData.descriptif_technique.analyse_risque.activites_secondaire);
                }
                if (parsedData && parsedData.descriptif_technique.analyse_risque?.type_cloisonnement) {
                    parsedData.descriptif_technique.analyse_risque.type_cloisonnement = new Set(parsedData.descriptif_technique.analyse_risque.type_cloisonnement);
                }
                if (parsedData && parsedData.descriptif_technique.analyse_risque?.type_de_chauffage) {
                    parsedData.descriptif_technique.analyse_risque.type_de_chauffage = new Set(parsedData.descriptif_technique.analyse_risque.type_de_chauffage);
                }
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'une main courante.
     */
    postMainsCourantesErp(
        erpId: string,
        params : any
    ) : Promise<AxiosResponse<MainCourante>>
    {
        const pathVariable = { 'erp_id': (new String(erpId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/erp/{erp_id}/mains_courantes'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}

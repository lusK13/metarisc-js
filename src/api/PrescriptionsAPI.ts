// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Prescription } from '../model/Prescription';
import { PrescriptionExploreResult } from '../model/PrescriptionExploreResult';

export class PrescriptionsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'une prescription type de la bibliothèque.
     */
    deletePrescription(
        prescriptionId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'prescription_id': (new String(prescriptionId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions/{prescription_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération des détails d'une prescription dans la bibliothèque.
     */
    getPrescription(
        prescriptionId: string
    ) : Promise<AxiosResponse<Prescription>>
    {
        const pathVariable = { 'prescription_id': (new String(prescriptionId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions/{prescription_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Cette opération permet d'explorer les prescriptions en fonction de leur emplacement dans la structure de répertoires.
Il est possible de filtrer les prescriptions en fonction de leur contenu ou de références aux supports réglementaires.
Les résultats retournés peuvent être des prescriptions ou des chemins (répertoires).
Les résultats sont trié de manière à afficher en premier les répertoires (chemins) puis les prescriptions.
     */
    paginateExplore(
        contenu? : string,
        supportReglementaireReference? : string,
        chemin? : string
    ) : Collection<PrescriptionExploreResult>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions/explore'),
            params: Utils.payloadFilter({
                'contenu': contenu === undefined ? undefined : (new String(contenu)).toString(), 
                'support_reglementaire_reference': supportReglementaireReference === undefined ? undefined : (new String(supportReglementaireReference)).toString(), 
                'chemin': chemin === undefined ? undefined : (new String(chemin)).toString()
            }),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Liste des prescriptions.
     */
    paginatePrescriptions(
        contenu? : string,
        supportReglementaireReference? : string
    ) : Collection<Prescription>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions'),
            params: Utils.payloadFilter({
                'contenu': contenu === undefined ? undefined : (new String(contenu)).toString(), 
                'support_reglementaire_reference': supportReglementaireReference === undefined ? undefined : (new String(supportReglementaireReference)).toString()
            }),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Modification d'une prescription existante en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    patchPrescription(
        prescriptionId: string,
        params : any
    ) : Promise<AxiosResponse<Prescription>>
    {
        const pathVariable = { 'prescription_id': (new String(prescriptionId)).toString() };
        return this.request({
            method: 'PATCH',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions/{prescription_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajout d'une nouvelle prescription type dans la bibliothèque.
     */
    postPrescription(
        params : any
    ) : Promise<AxiosResponse<Prescription>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/prescriptions'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}

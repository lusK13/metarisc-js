// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { MainCourante } from '../model/MainCourante';
import { MainCouranteParticipation } from '../model/MainCouranteParticipation';
import { PieceJointe } from '../model/PieceJointe';

export class MainsCourantesAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'une main courante existante.
     */
    deleteMainCourante(
        mainCouranteId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'main_courante_id': (new String(mainCouranteId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/mains_courantes/{main_courante_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération d'une main courante existante.
     */
    getMainCourante(
        mainCouranteId: string
    ) : Promise<AxiosResponse<MainCourante>>
    {
        const pathVariable = { 'main_courante_id': (new String(mainCouranteId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/mains_courantes/{main_courante_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Liste des participants de la main courante.
     */
    getParticipantsMainCourante(
        mainCouranteId: string
    ) : Promise<AxiosResponse<{data: MainCouranteParticipation[]}>>
    {
        const pathVariable = { 'main_courante_id': (new String(mainCouranteId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/mains_courantes/{main_courante_id}/participants'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération de la liste des documents.
     */
    paginateMainCouranteDocuments(
        mainCouranteId: string
    ) : Collection<PieceJointe>
    {
        const pathVariable = { 'main_courante_id': (new String(mainCouranteId)).toString() };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/mains_courantes/{main_courante_id}/documents'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Ajout d'un document.
     */
    postDocumentsMainCourante(
        mainCouranteId: string,
        params : any
    ) : Promise<AxiosResponse<PieceJointe>>
    {
        const pathVariable = { 'main_courante_id': (new String(mainCouranteId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/mains_courantes/{main_courante_id}/documents'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Mise à jour d'une main courante existante en définissant les valeurs des paramètres transmis. Tous les paramètres non fournis resteront inchangés.
     */
    postMainCourante(
        mainCouranteId: string,
        params : any
    ) : Promise<AxiosResponse<MainCourante>>
    {
        const pathVariable = { 'main_courante_id': (new String(mainCouranteId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/mains_courantes/{main_courante_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
    /**
     * Ajoute une participation à une main courante. Vous pouvez affecter plusieurs personnes à la main courante, y compris vous-même.
     */
    postParticipantsMainCourante(
        mainCouranteId: string,
        params : any
    ) : Promise<AxiosResponse<MainCouranteParticipation>>
    {
        const pathVariable = { 'main_courante_id': (new String(mainCouranteId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/mains_courantes/{main_courante_id}/participants'),
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

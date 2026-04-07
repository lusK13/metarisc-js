// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Collection } from "../collection";
import { Notification } from '../model/Notification';

export class NotificationsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'une notification correspondante à l'id donné.
     */
    deleteNotification(
        notificationId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'notification_id': (new String(notificationId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/notifications/{notification_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération des détails d'une notification correspondante à l'id donné.
     */
    getNotification(
        notificationId: string
    ) : Promise<AxiosResponse<Notification>>
    {
        const pathVariable = { 'notification_id': (new String(notificationId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/notifications/{notification_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.utilisateur?.roles) {
                    parsedData.utilisateur.roles = new Set(parsedData.utilisateur.roles);
                }
                if (parsedData && parsedData.subject.createur?.roles) {
                    parsedData.subject.createur.roles = new Set(parsedData.subject.createur.roles);
                }
                if (parsedData && parsedData.subject.modules) {
                    parsedData.subject.modules = new Set(parsedData.subject.modules);
                }
                if (parsedData && parsedData.subject.workflows_actifs) {
                    parsedData.subject.workflows_actifs = new Set(parsedData.subject.workflows_actifs);
                }
                if (parsedData && parsedData.subject.erp.descriptif_technique.analyse_risque?.activites_secondaire) {
                    parsedData.subject.erp.descriptif_technique.analyse_risque.activites_secondaire = new Set(parsedData.subject.erp.descriptif_technique.analyse_risque.activites_secondaire);
                }
                if (parsedData && parsedData.subject.erp.descriptif_technique.analyse_risque?.type_cloisonnement) {
                    parsedData.subject.erp.descriptif_technique.analyse_risque.type_cloisonnement = new Set(parsedData.subject.erp.descriptif_technique.analyse_risque.type_cloisonnement);
                }
                if (parsedData && parsedData.subject.erp.descriptif_technique.analyse_risque?.type_de_chauffage) {
                    parsedData.subject.erp.descriptif_technique.analyse_risque.type_de_chauffage = new Set(parsedData.subject.erp.descriptif_technique.analyse_risque.type_de_chauffage);
                }
                return parsedData;
            }]
        });
    }
    
    /**
     * Récupération des détails de toutes les notifications existantes pour l'utilisateur connecté.
     */
    paginateNotifications(
    ) : Collection<Notification>
    {
        const pathVariable = { };
        return this.collect({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/notifications'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Permet de marquer la notification donnée comme lue par l'utilisateur.
     */
    notificationMarquerCommeLue(
        notificationId: string
    ) : Promise<AxiosResponse<Notification>>
    {
        const pathVariable = { 'notification_id': (new String(notificationId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/notifications/{notification_id}/marquer_comme_lue'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.utilisateur?.roles) {
                    parsedData.utilisateur.roles = new Set(parsedData.utilisateur.roles);
                }
                if (parsedData && parsedData.subject.createur?.roles) {
                    parsedData.subject.createur.roles = new Set(parsedData.subject.createur.roles);
                }
                if (parsedData && parsedData.subject.modules) {
                    parsedData.subject.modules = new Set(parsedData.subject.modules);
                }
                if (parsedData && parsedData.subject.workflows_actifs) {
                    parsedData.subject.workflows_actifs = new Set(parsedData.subject.workflows_actifs);
                }
                if (parsedData && parsedData.subject.erp.descriptif_technique.analyse_risque?.activites_secondaire) {
                    parsedData.subject.erp.descriptif_technique.analyse_risque.activites_secondaire = new Set(parsedData.subject.erp.descriptif_technique.analyse_risque.activites_secondaire);
                }
                if (parsedData && parsedData.subject.erp.descriptif_technique.analyse_risque?.type_cloisonnement) {
                    parsedData.subject.erp.descriptif_technique.analyse_risque.type_cloisonnement = new Set(parsedData.subject.erp.descriptif_technique.analyse_risque.type_cloisonnement);
                }
                if (parsedData && parsedData.subject.erp.descriptif_technique.analyse_risque?.type_de_chauffage) {
                    parsedData.subject.erp.descriptif_technique.analyse_risque.type_de_chauffage = new Set(parsedData.subject.erp.descriptif_technique.analyse_risque.type_de_chauffage);
                }
                return parsedData;
            }]
        });
    }
    
    /**
     * Création d'une notification.
     */
    postNotification(
        params : any
    ) : Promise<AxiosResponse<Notification>>
    {
        const pathVariable = { };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/notifications'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                if (parsedData && parsedData.utilisateur?.roles) {
                    parsedData.utilisateur.roles = new Set(parsedData.utilisateur.roles);
                }
                if (parsedData && parsedData.subject.createur?.roles) {
                    parsedData.subject.createur.roles = new Set(parsedData.subject.createur.roles);
                }
                if (parsedData && parsedData.subject.modules) {
                    parsedData.subject.modules = new Set(parsedData.subject.modules);
                }
                if (parsedData && parsedData.subject.workflows_actifs) {
                    parsedData.subject.workflows_actifs = new Set(parsedData.subject.workflows_actifs);
                }
                if (parsedData && parsedData.subject.erp.descriptif_technique.analyse_risque?.activites_secondaire) {
                    parsedData.subject.erp.descriptif_technique.analyse_risque.activites_secondaire = new Set(parsedData.subject.erp.descriptif_technique.analyse_risque.activites_secondaire);
                }
                if (parsedData && parsedData.subject.erp.descriptif_technique.analyse_risque?.type_cloisonnement) {
                    parsedData.subject.erp.descriptif_technique.analyse_risque.type_cloisonnement = new Set(parsedData.subject.erp.descriptif_technique.analyse_risque.type_cloisonnement);
                }
                if (parsedData && parsedData.subject.erp.descriptif_technique.analyse_risque?.type_de_chauffage) {
                    parsedData.subject.erp.descriptif_technique.analyse_risque.type_de_chauffage = new Set(parsedData.subject.erp.descriptif_technique.analyse_risque.type_de_chauffage);
                }
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}

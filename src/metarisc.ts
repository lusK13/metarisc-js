// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "./core";
import { Tus } from "./tus";
import { SireneAI } from "./sirene-ai";
import { Client } from "./client";
import * as resources from './resources';

export class Metarisc extends Core
{
    public dates_passage_commission: resources.DatesPassageCommissionAPI;
    public dossiers: resources.DossiersAPI;
    public documents: resources.DocumentsAPI;
    public moi: resources.MoiAPI;
    public ping: resources.PingAPI;
    public sites_geographiques: resources.SitesGeographiquesAPI;
    public workflows: resources.WorkflowsAPI;
    public healthcheck: resources.HealthcheckAPI;
    public search: resources.SearchAPI;
    public enveloppes: resources.EnveloppesAPI;
    public organisations: resources.OrganisationsAPI;
    public pei: resources.PEIAPI;
    public commissions: resources.CommissionsAPI;
    public permissions: resources.PermissionsAPI;
    public mains_courantes_participants: resources.MainsCourantesParticipantsAPI;
    public prescriptions: resources.PrescriptionsAPI;
    public utilisateurs: resources.UtilisateursAPI;
    public erp: resources.ERPAPI;
    public dossiers_affectations: resources.DossiersAffectationsAPI;
    public mains_courantes: resources.MainsCourantesAPI;
    public anomalies: resources.AnomaliesAPI;
    public supports_reglementaires: resources.SupportsReglementairesAPI;
    public feed: resources.FeedAPI;
    public tournees_deci: resources.TourneesDECIAPI;
    public controles_pei: resources.ControlesPEIAPI;
    public evenements: resources.EvenementsAPI;
    public ordres_du_jour: resources.OrdresDuJourAPI;
    public commissions_membres: resources.CommissionsMembresAPI;
    public contacts: resources.ContactsAPI;
    public notifications: resources.NotificationsAPI;
    public tus: Tus;
    public sirene_ai: SireneAI;

    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);

        const tmpClient = this.client;

        return new Proxy(this, {
            get: function(metarisc, name, receiver) {
                switch(name) {
                    case 'dates_passage_commission': return new resources.DatesPassageCommissionAPI(config, tmpClient);
                    case 'dossiers': return new resources.DossiersAPI(config, tmpClient);
                    case 'documents': return new resources.DocumentsAPI(config, tmpClient);
                    case 'moi': return new resources.MoiAPI(config, tmpClient);
                    case 'ping': return new resources.PingAPI(config, tmpClient);
                    case 'sites_geographiques': return new resources.SitesGeographiquesAPI(config, tmpClient);
                    case 'workflows': return new resources.WorkflowsAPI(config, tmpClient);
                    case 'healthcheck': return new resources.HealthcheckAPI(config, tmpClient);
                    case 'search': return new resources.SearchAPI(config, tmpClient);
                    case 'enveloppes': return new resources.EnveloppesAPI(config, tmpClient);
                    case 'organisations': return new resources.OrganisationsAPI(config, tmpClient);
                    case 'pei': return new resources.PEIAPI(config, tmpClient);
                    case 'commissions': return new resources.CommissionsAPI(config, tmpClient);
                    case 'permissions': return new resources.PermissionsAPI(config, tmpClient);
                    case 'mains_courantes_participants': return new resources.MainsCourantesParticipantsAPI(config, tmpClient);
                    case 'prescriptions': return new resources.PrescriptionsAPI(config, tmpClient);
                    case 'utilisateurs': return new resources.UtilisateursAPI(config, tmpClient);
                    case 'erp': return new resources.ERPAPI(config, tmpClient);
                    case 'dossiers_affectations': return new resources.DossiersAffectationsAPI(config, tmpClient);
                    case 'mains_courantes': return new resources.MainsCourantesAPI(config, tmpClient);
                    case 'anomalies': return new resources.AnomaliesAPI(config, tmpClient);
                    case 'supports_reglementaires': return new resources.SupportsReglementairesAPI(config, tmpClient);
                    case 'feed': return new resources.FeedAPI(config, tmpClient);
                    case 'tournees_deci': return new resources.TourneesDECIAPI(config, tmpClient);
                    case 'controles_pei': return new resources.ControlesPEIAPI(config, tmpClient);
                    case 'evenements': return new resources.EvenementsAPI(config, tmpClient);
                    case 'ordres_du_jour': return new resources.OrdresDuJourAPI(config, tmpClient);
                    case 'commissions_membres': return new resources.CommissionsMembresAPI(config, tmpClient);
                    case 'contacts': return new resources.ContactsAPI(config, tmpClient);
                    case 'notifications': return new resources.NotificationsAPI(config, tmpClient);
                    case 'tus': return new Tus(config, tmpClient);
                    case 'sirene_ai': return new SireneAI(config, tmpClient);
                    default: return Reflect.get(metarisc, name, receiver);
                }
            }
        });
    }
}
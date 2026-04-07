// File generated from our OpenAPI spec
import { ERP } from './ERP';

import { DossierBase } from './DossierBase';

export type DossierErp = DossierBase & { 

    'type': TypeEnum;

    'erp': ERP;

    'numero_urbanisme': string | null;

    'numero_urbanisme_date': Date | null;

    'demandeur': string | null;

    'service_instructeur': string | null;

    'descriptif_travaux': string | null;

    'date_limite_traitement': Date | null;

    'dossier_complet': boolean | null;
};

export enum StatutEnum {
    OUVERT = 'OUVERT',
    CLOS = 'CLOS'
}

export enum ModulesEnum {
    ERP_ANALYSE_DE_RISQUE = 'erp:analyse_de_risque',
    ERP_ESSAIS_VISITE = 'erp:essais_visite',
    ERP_DEROGATIONS = 'erp:derogations',
    DECI_CONTROLE_TECHNIQUE_PEI = 'deci:controle_technique_pei'
}

export enum AvisEnum {
    FAVORABLE = 'favorable',
    DEFAVORABLE = 'defavorable'
}

export enum WorkflowsActifsEnum {
    ANALYSE_DE_RISQUE = 'analyse_de_risque',
    VALIDATION = 'validation',
    ARRIVEE_SIS = 'arrivee_sis',
    ARRIVEE_SIS_PREV = 'arrivee_sis_prev',
    ARRIVEE_SECRETARIAT_COMMISSION = 'arrivee_secretariat_commission',
    CONSULTATION_SIS = 'consultation_sis',
    PASSAGE_COMMISSION = 'passage_commission',
    RELECTURE = 'relecture',
    VISITE = 'visite',
    ARRIVEE_SECRETARIAT = 'arrivee_secretariat',
    WORKFLOW = 'workflow',
    RECEPTION_DE_TRAVAUX_EN_ATTENTE = 'reception_de_travaux_en_attente'
}

export enum TypeEnum {
    ERP_AUTORISATION_DE_TRAVAUX = 'erp:autorisation_de_travaux',
    ERP_PERMIS_DE_CONSTRUIRE = 'erp:permis_de_construire',
    ERP_LEVEE_DE_PRESCRIPTIONS = 'erp:levee_de_prescriptions',
    ERP_CHANGEMENT_DE_DUS = 'erp:changement_de_dus',
    ERP_SALON_TYPE_T = 'erp:salon_type_t',
    ERP_UTILISATION_EXCEPTIONNELLE_DE_LOCAUX = 'erp:utilisation_exceptionnelle_de_locaux',
    ERP_DEMANDE_D_IMPLANTATION_CTS_INFERIEUR_6_MOIS = 'erp:demande_d_implantation_cts_inferieur_6_mois',
    ERP_DEMANDE_D_IMPLANTATION_CTS_SUPERIEUR_6_MOIS = 'erp:demande_d_implantation_cts_superieur_6_mois',
    ERP_DEROGATION = 'erp:derogation',
    ERP_ETUDE_CAHIER_DES_CHARGES_TYPE_T = 'erp:etude_cahier_des_charges_type_t',
    ERP_LEVEE_DE_RESERVE = 'erp:levee_de_reserve',
    ERP_ECHEANCIER_DE_TRAVAUX = 'erp:echeancier_de_travaux',
    ERP_CAHIER_DES_CHARGES_SSI = 'erp:cahier_des_charges_ssi',
    ERP_ETUDE_SUITE_A_UN_AVIS_DIFFERE = 'erp:etude_suite_a_un_avis_differe',
    ERP_VISITE_PERIODIQUE = 'erp:visite_periodique',
    ERP_VISITE_RECEPTION = 'erp:visite_reception',
    ERP_VISITE_AVANT_OUVERTURE = 'erp:visite_avant_ouverture',
    ERP_VISITE_CONTROLE = 'erp:visite_controle',
    ERP_VISITE_INOPINEE = 'erp:visite_inopinee',
    ERP_VISITE_CHANTIER = 'erp:visite_chantier',
    ERP_DEMANDE_AVIS = 'erp:demande_avis',
    ERP_DEMANDE_RECLASSEMENT = 'erp:demande_reclassement',
    ERP_SUIVI_AVIS_DEFAVORABLE = 'erp:suivi_avis_defavorable',
    ERP_LEVEE_AVIS_DEFAVORABLE = 'erp:levee_avis_defavorable',
    ERP_DOSSIER_GE_2 = 'erp:dossier_ge_2',
    ERP_SCHEMA_GENERAL_ORGANISATION_SECURITE = 'erp:schema_general_organisation_securite',
    ERP_ETUDE_INGENIERIE = 'erp:etude_ingenierie',
    ERP_MANIFESTATION_TEMPORAIRE = 'erp:manifestation_temporaire'
}

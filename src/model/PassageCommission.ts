// File generated from our OpenAPI spec
import { Commission } from './Commission';

export type PassageCommission = {
    'id': string;
    'date_debut': Date;
    'date_fin': Date;
    'type': TypeEnum;
    'libelle': string;
    'raison_reprogrammation': string | null;
    'nb_dossiers': number;
    'commission': Commission;
    'organisation_id': string;
};

export enum TypeEnum {
    SALLE = 'salle',
    VISITE_RECEPTION_TRAVAUX_EN_GROUPE_DE_VISITE = 'visite_reception_travaux_en_groupe_de_visite',
    VISITE_RECEPTION_AVANT_OUVERTURE_EN_GROUPE_DE_VISITE = 'visite_reception_avant_ouverture_en_groupe_de_visite',
    VISITE_PERIODIQUE_EN_GROUPE_DE_VISITE = 'visite_periodique_en_groupe_de_visite',
    VISITE_INOPINEE_EN_GROUPE_DE_VISITE = 'visite_inopinee_en_groupe_de_visite',
    VISITE_CONTROLE_EN_GROUPE_DE_VISITE = 'visite_controle_en_groupe_de_visite',
    VISITE_CHANTIER_EN_GROUPE_DE_VISITE = 'visite_chantier_en_groupe_de_visite',
    VISITE_CONSEIL_EN_GROUPE_DE_VISITE = 'visite_conseil_en_groupe_de_visite',
    VISITE_RECEPTION_TRAVAUX_EN_PLENIERE = 'visite_reception_travaux_en_pleniere',
    VISITE_RECEPTION_AVANT_OUVERTURE_EN_PLENIERE = 'visite_reception_avant_ouverture_en_pleniere',
    VISITE_PERIODIQUE_EN_PLENIERE = 'visite_periodique_en_pleniere',
    VISITE_INOPINEE_EN_PLENIERE = 'visite_inopinee_en_pleniere',
    VISITE_CONTROLE_EN_PLENIERE = 'visite_controle_en_pleniere',
    VISITE_CHANTIER_EN_PLENIERE = 'visite_chantier_en_pleniere',
    VISITE_CONSEIL_EN_PLENIERE = 'visite_conseil_en_pleniere'
}

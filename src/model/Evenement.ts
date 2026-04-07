// File generated from our OpenAPI spec
import { PassageCommission } from './PassageCommission';

export type Evenement = {
    'id': string;
    'title': string;
    'type': TypeEnum;
    'description': string | null;
    'date_debut': Date;
    'date_fin': Date;
    'subject': PassageCommission;
    'organisation_id': string;
};

export enum TypeEnum {
    DEFAUT = 'DEFAUT',
    RECONNAISSANCE_OPERATIONNELLE_ANNUELLE = 'RECONNAISSANCE_OPERATIONNELLE_ANNUELLE',
    VISITE_PERIODIQUE = 'VISITE_PERIODIQUE',
    COMMISSION_SECURITE = 'COMMISSION_SECURITE'
}

// File generated from our OpenAPI spec
import { Organisation } from './Organisation';

export type Commission = {
    'id': string;
    'type': TypeEnum;
    'libelle': string;
    'presidence': Organisation;
    'secretariat': Organisation;
    'couleur'?: string | null;
    'organisation_id': string;
};

export enum TypeEnum {
    SOUS_COMMISSION_DEPARTEMENTALE = 'Sous-commission départementale',
    COMMISSION_COMMUNALE = 'Commission communale',
    COMMISSION_INTERCOMMUNALE = 'Commission intercommunale',
    COMMISSION_DARRONDISSEMENT = 'Commission d\'arrondissement',
    CO_DERST = 'CoDERST'
}

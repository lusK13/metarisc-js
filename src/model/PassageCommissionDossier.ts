// File generated from our OpenAPI spec
import { Dossier } from './Dossier';
import { MembreAvis } from './MembreAvis';

export type PassageCommissionDossier = {
    'id': string;
    'dossier': Dossier;
    'avis': AvisEnum | null;
    'ge4_3': boolean | null;
    'date_de_passage': Date;
    'avis_differe': boolean | null;
    'observations': string | null;
    'duree_minutes': number;
    'membres_avis': Array<MembreAvis> | null;
};

export enum AvisEnum {
    FAVORABLE = 'favorable',
    DEFAVORABLE = 'defavorable'
}

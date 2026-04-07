// File generated from our OpenAPI spec
import { DocumentTechnique } from './DocumentTechnique';
import { Essai } from './Essai';

export type RapportVisite = {
    'observations': string | null;
    'prise_de_note_interne': string | null;
    'proposition_avis': PropositionAvisEnum | null;
    'proposition_avis_observations': string;
    'facteur_dangerosite': number | null;
    'documents_techniques': Array<DocumentTechnique>;
    'essais': Array<Essai>;
    'descriptif_dossier': string | null;
};

export enum PropositionAvisEnum {
    FAVORABLE = 'favorable',
    DEFAVORABLE = 'defavorable'
}

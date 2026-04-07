// File generated from our OpenAPI spec
import { PrescriptionSupportReglementaire } from './PrescriptionSupportReglementaire';

export type Prescription = {
    'id': string;
    'contenu': string;
    'type': TypeEnum | null;
    'supports_reglementaires': Array<PrescriptionSupportReglementaire>;
    'chemins': Array<string>;
};

export enum TypeEnum {
    LIEE_A_L_EXPLOITATION = 'liee_a_l_exploitation',
    LIEE_A_L_AMELIORATION = 'liee_a_l_amelioration',
    RAPPEL_REGLEMENTAIRE = 'rappel_reglementaire'
}

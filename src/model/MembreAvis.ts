// File generated from our OpenAPI spec
import { CommissionMembre } from './CommissionMembre';

export type MembreAvis = {
    'membre': CommissionMembre;
    'avis': AvisEnum;
    'motivation_avis'?: string | null;
};

export enum AvisEnum {
    FAVORABLE = 'favorable',
    DEFAVORABLE = 'defavorable'
}

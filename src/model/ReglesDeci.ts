// File generated from our OpenAPI spec

export type ReglesDeci = {
    'pibi_conformite_matrice_seuil_pesee_1bar_par_nature': { [key: string]: number; };
    'pibi_performance_natures_performance_restreinte': Set<PibiPerformanceNaturesPerformanceRestreinteEnum>;
    'pibi_performance_natures_a_reformer': Set<PibiPerformanceNaturesAReformerEnum>;
    'pibi_performance_seuil_pesee_1bar': number;
    'pibi_conformite_seuil_surpression': number;
    'pibi_conformite_matrice_seuil_pesee_1bar_par_defaut': number;
    'pena_conformite_seuil_volume_citerne': number;
};

export enum PibiPerformanceNaturesPerformanceRestreinteEnum {
    PI1X65 = 'PI1x65',
    PI1X65_PI2X45 = 'PI1x65+PI2x45',
    PI1X100 = 'PI1x100',
    PI2X100 = 'PI2x100',
    BI1X65 = 'BI1x65',
    BI1X80 = 'BI1x80',
    BI1X100 = 'BI1x100',
    BI2X100 = 'BI2x100'
}

export enum PibiPerformanceNaturesAReformerEnum {
    PI1X65 = 'PI1x65',
    PI1X65_PI2X45 = 'PI1x65+PI2x45',
    PI1X100 = 'PI1x100',
    PI2X100 = 'PI2x100',
    BI1X65 = 'BI1x65',
    BI1X80 = 'BI1x80',
    BI1X100 = 'BI1x100',
    BI2X100 = 'BI2x100'
}

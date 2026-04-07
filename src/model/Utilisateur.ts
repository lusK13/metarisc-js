// File generated from our OpenAPI spec

export type Utilisateur = {
    'id': string;
    'first_name': string | null;
    'last_name': string | null;
    'created_at': Date;
    'updated_at': Date | null;
    'timezone': string;
    'is_active': boolean;
    'is_verified': boolean;
    'fonction': string | null;
    'avatar_url': string | null;
    'roles': Set<RolesEnum> | null;
};

export enum RolesEnum {
    ADMINISTRATEUR_FONCTIONNEL = 'administrateur_fonctionnel',
    VALIDEUR = 'valideur',
    VISIONNEUR_SIMPLE = 'visionneur_simple',
    VISIONNEUR_COMPLET = 'visionneur_complet',
    ATTRIBUTEUR = 'attributeur',
    RELECTEUR = 'relecteur',
    RAPPORTEUR = 'rapporteur',
    PREVENTIONNISTE = 'preventionniste',
    SECRETARIAT_COMMISSION_SECURITE = 'secretariat_commission_securite',
    SECRETARIAT = 'secretariat'
}

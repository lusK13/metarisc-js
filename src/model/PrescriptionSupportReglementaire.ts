// File generated from our OpenAPI spec

export type PrescriptionSupportReglementaire = {
    'id': string;
    'nature': NatureEnum;
    'legifrance_cid': string | null;
    'contenu'?: string;
    'titre'?: string;
    'etat': EtatEnum;
    'reference': string;
};

export enum NatureEnum {
    ARRETE = 'arrete',
    ARTICLE = 'article',
    ARRETES_PREFECTORAUX = 'arretes_prefectoraux',
    ARTICLES = 'articles',
    GUIDES = 'guides',
    LOCAL_AUTRE_TEXTE = 'local_autre_texte',
    DOCTRINE = 'doctrine',
    TEXTES_NATIONAUX_AUTRE_TEXTE = 'textes_nationaux_autre_texte',
    AVIS_CCS = 'avis_ccs',
    INSTRUCTIONS_TECHNIQUES = 'instructions_techniques',
    DECRET = 'decret',
    CIRCULAIRE = 'circulaire'
}

export enum EtatEnum {
    EN_VIGUEUR = 'en_vigueur'
}

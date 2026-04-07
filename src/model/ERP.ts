// File generated from our OpenAPI spec
import { AdressePostale } from './AdressePostale';
import { Commission } from './Commission';
import { DescriptifTechniqueERPBase } from './DescriptifTechniqueERPBase';
import { ERPLie } from './ERPLie';
import { ReferenceExterieure } from './ReferenceExterieure';
import { SiteGeographique } from './SiteGeographique';
import { TexteApplicable } from './TexteApplicable';
import { Utilisateur } from './Utilisateur';

export type ERP = {
    'id': string;
    'date_de_realisation': Date;
    'date_de_derniere_mise_a_jour': Date | null;
    'implantation': AdressePostale;
    'descriptif_technique'?: DescriptifTechniqueERPBase;
    'avis_exploitation': AvisExploitationEnum | null;
    'date_pc_initial': Date | null;
    'date_ouverture': Date | null;
    'date_derniere_visite': Date | null;
    'notes_internes': string | null;
    'references_exterieures': Array<ReferenceExterieure>;
    'a_visiter_en': string | null;
    'sites_geographiques': Array<SiteGeographique>;
    'commission_de_securite': Commission | null;
    'titulaires': Array<Utilisateur>;
    'etablissement_rattache': ERPLie | null;
    'textes_applicables': Array<TexteApplicable>;
    'genre': GenreEnum;
    'organisation_id': string;
};

export enum AvisExploitationEnum {
    FAVORABLE = 'favorable',
    DEFAVORABLE = 'defavorable'
}

export enum GenreEnum {
    CELLULE = 'cellule',
    ERP = 'erp'
}

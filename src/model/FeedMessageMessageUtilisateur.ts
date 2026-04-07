// File generated from our OpenAPI spec
import { Utilisateur } from './Utilisateur';

import { FeedMessageBase } from './FeedMessageBase';

export type FeedMessageMessageUtilisateur = FeedMessageBase & { 

    'organisation_id': string;

    'type': TypeEnum;

    'categorie': CategorieEnum;

    'texte': string;

    'redacteur': Utilisateur;
};

export enum TypeEnum {
    MESSAGE_UTILISATEUR = 'message_utilisateur'
}

export enum CategorieEnum {
    DOCTRINE_PROCEDURE = 'doctrine_procedure',
    INFORMATION = 'information'
}

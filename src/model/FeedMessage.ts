// File generated from our OpenAPI spec
import { FeedMessageMessageUtilisateur } from './FeedMessageMessageUtilisateur';
import { FeedMessageTexte } from './FeedMessageTexte';

export type FeedMessage = FeedMessageTexte | FeedMessageMessageUtilisateur;

export enum TypeEnum {
    TEXTE = 'texte',
    MESSAGE_UTILISATEUR = 'message_utilisateur'
}

export enum CategorieEnum {
    DOCTRINE_PROCEDURE = 'doctrine_procedure',
    INFORMATION = 'information'
}

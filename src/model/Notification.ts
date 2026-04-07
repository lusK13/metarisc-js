// File generated from our OpenAPI spec
import { Dossier } from './Dossier';
import { Utilisateur } from './Utilisateur';

export type Notification = {
    'id': string;
    'title': string;
    'message': string;
    'type': TypeEnum;
    'contexte': { [key: string]: string; };
    'date_creation': Date;
    'date_de_lecture': Date | null;
    'utilisateur': Utilisateur;
    'subject': Dossier | null;
};

export enum TypeEnum {
    INFO = 'info'
}

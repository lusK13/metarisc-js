// File generated from our OpenAPI spec

import { FeedMessageBase } from './FeedMessageBase';

export type FeedMessageTexte = FeedMessageBase & { 

    'type': TypeEnum;

    'texte': string;
};

export enum TypeEnum {
    TEXTE = 'texte'
}

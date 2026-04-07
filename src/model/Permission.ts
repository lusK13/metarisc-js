// File generated from our OpenAPI spec

export type Permission = {
    'name': NameEnum;
};

export enum NameEnum {
    DECI_ACCESS = 'deci:access',
    ERP_ACCESS = 'erp:access',
    SIRENE_ACCESS = 'sirene:access',
    COMMISSION_ACCESS = 'commission:access',
    DOSSIER_CREATE = 'dossier:create',
    DOSSIER_EDIT = 'dossier:edit:*',
    DOSSIER_DELETE = 'dossier:delete',
    DOSSIER_VIEW = 'dossier:view',
    ERP_CREATE = 'erp:create',
    ERP_EDIT = 'erp:edit:*',
    ERP_EDIT_TITULAIRES = 'erp:edit:titulaires',
    ERP_DELETE = 'erp:delete',
    ERP_VIEW = 'erp:view',
    ORGANISATION_CREATE = 'organisation:create',
    ORGANISATION_EDIT = 'organisation:edit:*',
    ORGANISATION_DELETE = 'organisation:delete',
    ORGANISATION_VIEW = 'organisation:view',
    UTILISATEUR_CREATE = 'utilisateur:create',
    UTILISATEUR_EDIT = 'utilisateur:edit:*',
    UTILISATEUR_DELETE = 'utilisateur:delete',
    UTILISATEUR_VIEW = 'utilisateur:view',
    MESSAGE_CREATE = 'message:create',
    MESSAGE_EDIT = 'message:edit:*',
    MESSAGE_DELETE = 'message:delete',
    MESSAGE_VIEW = 'message:view',
    COMMISSION_CREATE = 'commission:create',
    COMMISSION_EDIT = 'commission:edit:*',
    COMMISSION_DELETE = 'commission:delete',
    COMMISSION_VIEW = 'commission:view',
    EVENEMENT_CREATE = 'evenement:create',
    EVENEMENT_EDIT = 'evenement:edit:*',
    EVENEMENT_DELETE = 'evenement:delete',
    EVENEMENT_VIEW = 'evenement:view'
}

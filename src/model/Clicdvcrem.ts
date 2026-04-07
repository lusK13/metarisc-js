// File generated from our OpenAPI spec
import { Degagement } from './Degagement';
import { EffectifsNiveau } from './EffectifsNiveau';
import { Local } from './Local';

export type Clicdvcrem = {
    'activite_principale': ActivitePrincipaleEnum | null;
    'activites_secondaire': Set<ActivitesSecondaireEnum> | null;
    'categorie': CategorieEnum | null;
    'groupement_etablissement': GroupementEtablissementEnum | null;
    'tableau_des_effectifs': Array<EffectifsNiveau> | null;
    'effectif_public': number | null;
    'effectif_public_total': number | null;
    'effectif_personnel': number | null;
    'effectif_personnel_total': number | null;
    'presence_locaux_sommeil': boolean | null;
    'presence_locaux_sommeil_au_dessus_r1': boolean | null;
    'niveau_total': number | null;
    'surface_totale': number | null;
    'surface_accessible_au_public': number | null;
    'r143_20': boolean | null;
    'batiment_etages_en_superstructure': number | null;
    'batiment_etages_en_infrastructure': number | null;
    'etablissement_de_plain_pied': boolean | null;
    'plancher_bas_du_dernier_niveau': PlancherBasDuDernierNiveauEnum | null;
    'plancher_bas_du_dernier_niveau_accessible_au_public': PlancherBasDuDernierNiveauAccessibleAuPublicEnum | null;
    'voie_engin': boolean | null;
    'nombre_voies_engins': number | null;
    'voie_echelle': boolean | null;
    'nombre_facades_accessibles': number | null;
    'informations_acces_facades': string | null;
    'espace_libre': boolean | null;
    'desserte_informations_complementaires': string | null;
    'presence_erp_ou_tiers_contigus': boolean | null;
    'isolement_contigus_realise_degre_cf': IsolementContigusRealiseDegreCfEnum | null;
    'isolement_contigus_realise_degre_cf_autre_precision': string | null;
    'isolement_contigus_informations_complementaires': string | null;
    'air_libre': AirLibreEnum | null;
    'vis_a_vis': VisAVisEnum | null;
    'isolement_vis_a_vis_informations_complementaires': string | null;
    'presence_erp_ou_tiers_superpose': boolean | null;
    'isolement_superpose_realise_degre_cf': IsolementSuperposeRealiseDegreCfEnum | null;
    'isolement_superpose_realise_degre_cf_autre_precision': string | null;
    'isolement_superpose_informations_complementaires': string | null;
    'structure_sf': StructureSfEnum | null;
    'plancher_sf': PlancherSfEnum | null;
    'stabilite_au_feu_informations_complementaires': string | null;
    'isolement_autre_description': string | null;
    'construction_structures_description': string | null;
    'construction_couverture_description': string | null;
    'construction_facades_description': string | null;
    'type_cloisonnement': Set<TypeCloisonnementEnum> | null;
    'construction_distribution_interieure_informations_complementaires': string | null;
    'locaux': Array<Local> | null;
    'construction_conduits_et_gaines_description': string | null;
    'construction_amenagements_interieurs_description': string | null;
    'degagement_normaux': Array<Degagement> | null;
    'degagements_accessoires': Array<Degagement> | null;
    'degagement_exigibles_informations_complementaires': string | null;
    'degagement_supplementaires': Array<Degagement> | null;
    'degagement_escaliers_description': string | null;
    'degagement_ascenseurs_escaliers_mecaniques_trottoirs_roulants_description': string | null;
    'presence_eas_ou_equivalents': boolean | null;
    'evacuation_personnes_situation_handicap_observation': string | null;
    'degagement_espaces_attente_securises_informations_complementaires': string | null;
    'degagement_tribunes_et_gradins_non_demontables_description': string | null;
    'enfouissement': boolean | null;
    'degagement_enfouissement_informations_complementaires': string | null;
    'presence_desenfumage_mécanique': boolean | null;
    'presence_desenfumage_naturel': boolean | null;
    'ventilation_desenfumage_informations_complementaires': string | null;
    'groupe_electrogene': boolean | null;
    'batteries_accumulateurs_et_materiels_associes': boolean | null;
    'photovoltaique': boolean | null;
    'parafoudre': boolean | null;
    'electricite_eclairage_informations_complementaires': string | null;
    'puissance_chaufferie': PuissanceChaufferieEnum | null;
    'presence_gaz_chaufferie': boolean | null;
    'type_de_chauffage': Set<TypeDeChauffageEnum> | null;
    'chauffage_ventilation_informations_complementaires': string | null;
    'puissance_cuisine': PuissanceCuisineEnum | null;
    'type_de_cuisine': TypeDeCuisineEnum | null;
    'presence_gaz_cuisine': boolean | null;
    'systeme_ventilation': SystemeVentilationEnum | null;
    'risques_spéciaux_informations_complementaires': string | null;
    'presence_extincteur': boolean | null;
    'presence_ria': boolean | null;
    'deversoirs_ponctuels': boolean | null;
    'elements_de_constructions_irrigues': boolean | null;
    'presence_deci': boolean | null;
    'presence_colonnes_seches': boolean | null;
    'presence_colonnes_en_charge': boolean | null;
    'installation_extinction': InstallationExtinctionEnum | null;
    'moyens_de_secours_informations_complementaires': string | null;
    'deci_description': string | null;
    'affichage_des_plans_intervention': boolean | null;
    'affichage_des_consignes_de_securite': boolean | null;
    'tour_incendie': boolean | null;
    'tremie_attaque': boolean | null;
    'service_de_securite_incendie': ServiceDeSecuriteIncendieEnum | null;
    'presence_pc_securite': boolean | null;
    'service_de_securite_incendie_informations_complementaires': string | null;
    'systeme_de_securite_incendie': boolean | null;
    'type_ssi': TypeSsiEnum | null;
    'type_alarme': TypeAlarmeEnum | null;
    'temporisation_alarme_en_minutes': number | null;
    'desenfumage_commande_par_le_ssi': boolean | null;
    'ligne_telephonique_reliee_au_cta': boolean | null;
    'autre_systeme_alerte': AutreSystemeAlerteEnum | null;
    'systeme_securite_incendie_informations_complementaires': string | null;
    'defibrillateur': boolean | null;
    'specificites_informations_complementaires': string | null;
};

export enum ActivitePrincipaleEnum {
    CTS___CHAPITEAUX = 'CTS - Châpiteaux',
    CTS___STRUCTURES = 'CTS - Structures',
    CTS___TENTES = 'CTS - Tentes',
    EF___BATEAUX_EN_STATIONNEMENT_SUR_LES_EAUX_INTERIEURES = 'EF - Bateaux en stationnement sur les eaux intérieures',
    EF___BATEAUX_STATIONNAIRES = 'EF - Bateaux stationnaires',
    EF___ETABLISSEMENTS_FLOTTANTS = 'EF - Etablissements flottants',
    EP___MAISON_DARRET = 'EP - Maison d\'arrêt',
    EP___MAISON_CENTRALE_ET_CENTRE_DE_DETENTION = 'EP - Maison centrale et centre de détention',
    EP___CENTRE_PENITENTIAIRE = 'EP - Centre pénitentiaire',
    EP___CENTRE_DE_SEMI_LIBERTE_ET_CENTRES_POUR_PEINES_AMENAGEES = 'EP - Centre de semi-liberté et centres pour peines aménagées',
    EP___TABLISSEMENT_PENITENTIAIRE_POUR_MINEURS = 'EP - Établissement pénitentiaire pour mineurs',
    EP___CENTRE_DE_RETENTION_ADMINISTRATIVE = 'EP - Centre de rétention administrative',
    GA___GARES = 'GA - Gares',
    GEEM___GRANDS_ETABLISSEMENTS_A_EXPLOITATION_MULTIPLE = 'GEEM - Grands établissements à exploitation multiple',
    IGH___GHA__HABITATION = 'IGH - GHA (Habitation)',
    IGH___GHO__HOTEL = 'IGH - GHO (Hôtel)',
    IGH___GHR__ENSEIGNEMENT = 'IGH - GHR (Enseignement)',
    IGH___GHS__DEPOT_DARCHIVES = 'IGH - GHS (Dépôt d\'archives)',
    IGH___GHU__SANITAIRE = 'IGH - GHU (Sanitaire)',
    IGH___GHW1__BUREAU = 'IGH - GHW1 (Bureau)',
    IGH___GHW2__BUREAU = 'IGH - GHW2 (Bureau)',
    IGH___GHZ__MIXTE = 'IGH - GHZ (Mixte)',
    IGH___GHTC__TOUR_DE_CONTROLE = 'IGH - GHTC (Tour de contrôle)',
    IGH___ITGH = 'IGH - ITGH',
    IGH___IMH = 'IGH - IMH',
    J___ETABLISSEMENTS_DENSEIGNEMENT_AVEC_INTERNAT_POUR_JEUNES_HANDICAPES_OU_INADAPTES = 'J - Etablissements d\'enseignement avec internat pour jeunes handicapés ou inadaptés',
    J___ETABLISSEMENTS_DHEBERGEMENT_POUR_ADULTES_HANDICAPES = 'J - Etablissements d\'hébergement pour adultes handicapés',
    J___ETABLISSEMENTS_MEDICO_EDUCATIFS_AVEC_INTERNAT_POUR_JEUNES_HANDICAPES_OU_INADAPTES = 'J - Etablissements médico-éducatifs avec internat pour jeunes handicapés ou inadaptés',
    J___STRUCTURES_DACCUEIL_POUR_PERSONNES_AGEES = 'J - Structures d\'accueil pour personnes âgées',
    J___STRUCTURES_DACCUEIL_POUR_PERSONNES_HANDICAPEES = 'J - Structures d\'accueil pour personnes handicapées',
    L___CABARETS = 'L - Cabarets',
    L___SALLES_DAUDITION = 'L - Salles d\'audition',
    L___SALLE_DE_CONFERENCES = 'L - Salle de conférences',
    L___SALLES_DE_PARI = 'L - Salles de pari',
    L___SALLES_DE_PROJECTION = 'L - Salles de projection',
    L___SALLES_DE_QUARTIER__OU_ASSIMILEE = 'L - Salles de quartier (ou assimilée)',
    L___SALLES_DE_REUNIONS = 'L - Salles de réunions',
    L___SALLES_DE_SPECTACLES = 'L - Salles de spectacles',
    L___SALLES_MULTIMEDIA = 'L - Salles multimédia',
    L___SALLES_POLYVALENTES_A_DOMINANTE_SPORTIVE_DONT_LA_SUPERFICIE_UNITAIRE_EST_SUPERIEURE_OU_EGALE_A_1_200_M2 = 'L - Salles polyvalentes à dominante sportive, dont la superficie unitaire est supérieure ou égale à 1 200 m2',
    L___SALLES_POLYVALENTES_NON_VISEE_PAR_LE_TYPE_X__SALLE_POLYVALENTE_QUI_NA_PAS_UNE_DESTINATION_UNIQUE = 'L - Salles polyvalentes non visée par le Type X (salle polyvalente qui n\'a pas une destination unique)',
    L___SALLES_RESERVEES_AUX_ASSOCIATIONS = 'L - Salles réservées aux associations',
    M___AIRES_DE_VENTE = 'M - Aires de vente',
    M___CENTRES_COMMERCIAUX = 'M - Centres commerciaux',
    M___LOCAUX_DE_VENTE = 'M - Locaux de vente',
    M___MAGASIN_DE_VENTE = 'M - Magasin de vente',
    N___BARS = 'N - Bars',
    N___BRASSERIES = 'N - Brasseries',
    N___CAFETARIA = 'N - Cafétaria',
    N___CAFES = 'N - Cafés',
    N___CANTINES = 'N - Cantines',
    N___DEBITS_DE_BOISSONS = 'N - Débits de boissons',
    N___RESTAURANTS = 'N - Restaurants',
    O___HOTELS = 'O - Hôtels',
    O___PENSIONS_DE_FAMILLE = 'O - Pensions de famille',
    OA___HOTELS_RESTAURANTS_DALTITUDE = 'OA - Hôtels-restaurants d\'altitude',
    P___SALLE_DE_BALS = 'P - Salle de bals',
    P___DANCING___DISCOTHEQUE = 'P - Dancing / discothèque',
    P___SALLES_DE_JEUX = 'P - Salles de jeux',
    PA___ARENES = 'PA - Arènes',
    PA___HIPPODROMES = 'PA - Hippodromes',
    PA___PISCINES = 'PA - Piscines',
    PA___PISTES_DE_PATINAGE = 'PA - Pistes de patinage',
    PA___STADES = 'PA - Stades',
    PA___TERRAINS_DE_SPORT = 'PA - Terrains de sport',
    PA___PARC_DATTRACTION = 'PA - Parc d\'attraction',
    PE_2_2___LOCAUX_A_USAGE_COLLECTIF_DUNE_SURFACE_UNITAIRE_SUPERIEURE_A_50_METRES_CARRES_DES_LOGEMENTS_FOYERS_ET_DE_LHABITAT_DE_LOISIRS_A_GESTION_COLLECTIVE = 'PE 2_2 - Locaux à usage collectif d\'une surface unitaire supérieure à 50 mètres carrés des logements-foyers et de l\'habitat de loisirs à gestion collective',
    PE_2_2___BATIMENTS_OU_LOCAUX_A_USAGE_DHEBERGEMENT_QUI_NE_RELEVENT_DAUCUN_TYPE_DEFINI_A_LARTICLE_GN_1_ET_QUI_PERMETTENT_DACCUEILLIR_PLUS_DE_15_ET_MOINS_DE_100_PERSONNES_NY_ELISANT_PAS_DOMICILE = 'PE 2_2 - Bâtiments ou locaux à usage d\'hébergement qui ne relèvent d\'aucun type défini à l\'article GN 1 et qui permettent d\'accueillir plus de 15 et moins de 100 personnes n\'y élisant pas domicile',
    PE_2_2___HEBERGEMENT_DE_MINEURS_EN_DEHORS_DE_LEURS_FAMILLES_LE_SEUIL_DE_LEFFECTIF_EST_FIXE_A_7_MINEURS = 'PE 2_2 - Hébergement de mineurs en dehors de leurs familles, le seuil de l\'effectif est fixé à 7 mineurs',
    PE_2_2___MAISONS_DASSISTANTS_MATERNELS__MAM_DONT_LES_LOCAUX_ACCESSIBLES_AU_PUBLIC_SONT_STRICTEMENT_LIMITES_A_UN_SEUL_ETAGE_SUR_REZ_DE_CHAUSSEE_ET_DONT_LEFFECTIF_NE_DEPASSE_PAS_16_ENFANTS = 'PE 2_2 - Maisons d\'assistants maternels (MAM) dont les locaux accessibles au public sont strictement limités à un seul étage sur rez-de-chaussée et dont l\'effectif ne dépasse pas 16 enfants',
    PS___PARCS_DE_STATIONNEMENT_COUVERTS = 'PS - Parcs de stationnement couverts',
    PS___PARC_DE_STATIONNEMENT_MIXTE = 'PS - Parc de stationnement mixte',
    PS___PARC_DE_STATIONNEMENT_LARGEMENT_VENTILE = 'PS - Parc de stationnement largement ventilé',
    PS___PARC_DE_STATIONNEMENT_A_RANGEMENT_AUTOMATISE = 'PS - Parc de stationnement à rangement automatisé',
    R___AUBERGES_DE_JEUNESSE__COMPRENANT_AU_MOINS_UN_LOCAL_COLLECTIF_A_SOMMEIL = 'R - Auberges de jeunesse (comprenant au moins un local collectif à sommeil)',
    R___AUTO_ECOLES = 'R - Auto-écoles',
    R___CENTRES_AERES = 'R - Centres aérés',
    R___CENTRES_DE_LOISIRS__SANS_HEBERGEMENT = 'R - Centres de loisirs (sans hébergement)',
    R___CENTRES_DE_VACANCES = 'R - Centres de vacances',
    R___COLONIES_DE_VACANCES = 'R - Colonies de vacances',
    R___CRECHES = 'R - Crèches',
    R___ECOLES_MATERNELLES = 'R - Ecoles maternelles',
    R___ETABLISSEMENTS_DENSEIGNEMENT = 'R - Etablissements d\'enseignement',
    R___ETABLISSEMENTS_DE_FORMATION = 'R - Etablissements de formation',
    R___HALTES_GARDERIES = 'R - Haltes-garderies',
    R___INTERNATS_DES_ETABLISSEMENTS_DE_LENSEIGNEMENT_PRIMAIRE_ET_SECONDAIRE = 'R - Internats des établissements de l\'enseignement primaire et secondaire',
    R___JARDINS_DENFANT = 'R - Jardins d\'enfant',
    R___LYCEE_PUBLIC = 'R - Lycee public',
    R___COLLEGE_PUBLIC = 'R - Collège public',
    R___LYCEE_PRIVE = 'R - Lycee privé',
    R___COLLEGE_PRIVE = 'R - Collège privé',
    R___COLE_ELEMENTAIRE = 'R - École élémentaire',
    REF___REFUGES_DE_MONTAGNE = 'REF - Refuges de montagne',
    S___BIBLIOTHEQUES = 'S - Bibliothèques',
    S___CENTRES_DE_DOCUMENTATION_ET_DE_CONSULTATION_DARCHIVES = 'S - Centres de documentation et de consultation d\'archives',
    SG___STRUCTURES_GONFLABLES = 'SG - Structures gonflables',
    T___ETABLISSEMENTS_A_VOCATION_COMMERCIALE_DESTINES_A_DES_EXPOSITIONS = 'T - Etablissements à vocation commerciale destinés à des expositions',
    T___FOIRES_EXPOSITIONS = 'T - Foires-expositions',
    T___SALLES_DEXPOSITIONS_A_CARACTERE_PERMANENT_NAYANT_PAS_UNE_VOCATION_DE_FOIRE_OU_DE_SALON = 'T - Salles d\'expositions à caractère permanent n\'ayant pas une vocation de foire ou de salon',
    T___SALLES_DEXPOSITIONS_A_CARACTERE_PERMANENT_DE_VEHICULES_AUTOMOBILES_BATEAUX_MACHINES_ET_AUTRES_VOLUMINEUX_BIENS_DEQUIPEMENTS_ASSIMILABLES = 'T - Salles d\'expositions à caractère permanent de véhicules automobiles, bateaux, machines et autres volumineux biens d\'équipements assimilables',
    T___SALONS_A_CARACTERE_TEMPORAIRE = 'T - Salons à caractère temporaire',
    U___ETABLISSEMENTS_DE_CURE_THERMALE_OU_DE_THALASSOTHERAPIE = 'U - Etablissements de cure thermale ou de thalassothérapie',
    U___ETABLISSEMENTS_DE_SANTE_PUBLICS_OU_PRIVES_DISPENSANT_DES_SOINS_DE_COURTE_DUREE_EN_MEDECINE_CHIRURGIE_OBSTETRIQUE = 'U - Etablissements de santé publics ou privés dispensant des soins de courte durée en médecine, chirurgie, obstétrique',
    U___ETABLISSEMENTS_DE_SANTE_PUBLICS_OU_PRIVES_DISPENSANT_DES_SOINS_DE_PSYCHIATRIE_DE_SUITE_OU_DE_READAPTATION_DES_SOINS_DE_LONGUE_DUREE_A_DES_PERSONNES_NAYANT_PAS_LEUR_AUTONOMIE_DE_VIE_DONT_LETAT_NECESSITE_UNE_SURVEILLANCE_MEDICALE_CONSTANTE = 'U - Etablissements de santé publics ou privés dispensant des soins de psychiatrie, de suite ou de réadaptation, des soins de longue durée, à des personnes n\'ayant pas leur autonomie de vie dont l\'état nécessite une surveillance médicale constante',
    U___POUPONNIERES__ENFANTS_DE_MOINS_DE_3_ANS = 'U - Pouponnières (enfants de moins de 3 ans)',
    V___EGLISES = 'V - Eglises',
    V___MOSQUEES = 'V - Mosquées',
    V___SYNAGOGUES = 'V - Synagogues',
    V___TEMPLES = 'V - Temples',
    W___ADMINISTRATIONS = 'W - Administrations',
    W___BANQUES = 'W - Banques',
    W___BUREAUX = 'W - Bureaux',
    X___MANEGES = 'X - Manèges',
    X___PATINOIRES = 'X - Patinoires',
    X___PISCINES_COUVERTES_TRANSFORMABLES_ET_MIXTES = 'X - Piscines couvertes, transformables et mixtes',
    X___SALLES_DEDUCATION_PHYSIQUE_ET_SPORTIVE = 'X - Salles d\'éducation physique et sportive',
    X___SALLES_OMNISPORTS = 'X - Salles omnisports',
    X___SALLES_POLYVALENTES_A_DOMINANTE_SPORTIVE_DONT_LAIRE_DACTIVITE_EST_INFERIEURE_A_1200_M_ET_LA_HAUTEUR_SOUS_PLAFOND_SUPERIEURE_OU_EGALE_A_650_METRES = 'X - Salles polyvalentes à dominante sportive, dont l\'aire d\'activité est inférieure à 1200 m² et la hauteur sous plafond supérieure ou égale à 6,50 mètres',
    X___SALLES_SPORTIVES_SPECIALISEES = 'X - Salles sportives spécialisées',
    Y___MUSEES = 'Y - Musées',
    Y___SALLES_DESTINEES_A_RECEVOIR_DES_EXPOSITIONS_A_VOCATION_CULTURELLE_SCIENTIFIQUE_TECHNIQUE_ARTISTIQUE_ETC__AYANT_UN_CARACTERE_TEMPORAIRE = 'Y - Salles destinées à recevoir des expositions à vocation culturelle, scientifique, technique, artistique, etc. ayant un caractère temporaire'
}

export enum ActivitesSecondaireEnum {
    CTS___CHAPITEAUX = 'CTS - Châpiteaux',
    CTS___STRUCTURES = 'CTS - Structures',
    CTS___TENTES = 'CTS - Tentes',
    EF___BATEAUX_EN_STATIONNEMENT_SUR_LES_EAUX_INTERIEURES = 'EF - Bateaux en stationnement sur les eaux intérieures',
    EF___BATEAUX_STATIONNAIRES = 'EF - Bateaux stationnaires',
    EF___ETABLISSEMENTS_FLOTTANTS = 'EF - Etablissements flottants',
    EP___MAISON_DARRET = 'EP - Maison d\'arrêt',
    EP___MAISON_CENTRALE_ET_CENTRE_DE_DETENTION = 'EP - Maison centrale et centre de détention',
    EP___CENTRE_PENITENTIAIRE = 'EP - Centre pénitentiaire',
    EP___CENTRE_DE_SEMI_LIBERTE_ET_CENTRES_POUR_PEINES_AMENAGEES = 'EP - Centre de semi-liberté et centres pour peines aménagées',
    EP___TABLISSEMENT_PENITENTIAIRE_POUR_MINEURS = 'EP - Établissement pénitentiaire pour mineurs',
    EP___CENTRE_DE_RETENTION_ADMINISTRATIVE = 'EP - Centre de rétention administrative',
    GA___GARES = 'GA - Gares',
    GEEM___GRANDS_ETABLISSEMENTS_A_EXPLOITATION_MULTIPLE = 'GEEM - Grands établissements à exploitation multiple',
    IGH___GHA__HABITATION = 'IGH - GHA (Habitation)',
    IGH___GHO__HOTEL = 'IGH - GHO (Hôtel)',
    IGH___GHR__ENSEIGNEMENT = 'IGH - GHR (Enseignement)',
    IGH___GHS__DEPOT_DARCHIVES = 'IGH - GHS (Dépôt d\'archives)',
    IGH___GHU__SANITAIRE = 'IGH - GHU (Sanitaire)',
    IGH___GHW1__BUREAU = 'IGH - GHW1 (Bureau)',
    IGH___GHW2__BUREAU = 'IGH - GHW2 (Bureau)',
    IGH___GHZ__MIXTE = 'IGH - GHZ (Mixte)',
    IGH___GHTC__TOUR_DE_CONTROLE = 'IGH - GHTC (Tour de contrôle)',
    IGH___ITGH = 'IGH - ITGH',
    IGH___IMH = 'IGH - IMH',
    J___ETABLISSEMENTS_DENSEIGNEMENT_AVEC_INTERNAT_POUR_JEUNES_HANDICAPES_OU_INADAPTES = 'J - Etablissements d\'enseignement avec internat pour jeunes handicapés ou inadaptés',
    J___ETABLISSEMENTS_DHEBERGEMENT_POUR_ADULTES_HANDICAPES = 'J - Etablissements d\'hébergement pour adultes handicapés',
    J___ETABLISSEMENTS_MEDICO_EDUCATIFS_AVEC_INTERNAT_POUR_JEUNES_HANDICAPES_OU_INADAPTES = 'J - Etablissements médico-éducatifs avec internat pour jeunes handicapés ou inadaptés',
    J___STRUCTURES_DACCUEIL_POUR_PERSONNES_AGEES = 'J - Structures d\'accueil pour personnes âgées',
    J___STRUCTURES_DACCUEIL_POUR_PERSONNES_HANDICAPEES = 'J - Structures d\'accueil pour personnes handicapées',
    L___CABARETS = 'L - Cabarets',
    L___SALLES_DAUDITION = 'L - Salles d\'audition',
    L___SALLE_DE_CONFERENCES = 'L - Salle de conférences',
    L___SALLES_DE_PARI = 'L - Salles de pari',
    L___SALLES_DE_PROJECTION = 'L - Salles de projection',
    L___SALLES_DE_QUARTIER__OU_ASSIMILEE = 'L - Salles de quartier (ou assimilée)',
    L___SALLES_DE_REUNIONS = 'L - Salles de réunions',
    L___SALLES_DE_SPECTACLES = 'L - Salles de spectacles',
    L___SALLES_MULTIMEDIA = 'L - Salles multimédia',
    L___SALLES_POLYVALENTES_A_DOMINANTE_SPORTIVE_DONT_LA_SUPERFICIE_UNITAIRE_EST_SUPERIEURE_OU_EGALE_A_1_200_M2 = 'L - Salles polyvalentes à dominante sportive, dont la superficie unitaire est supérieure ou égale à 1 200 m2',
    L___SALLES_POLYVALENTES_NON_VISEE_PAR_LE_TYPE_X__SALLE_POLYVALENTE_QUI_NA_PAS_UNE_DESTINATION_UNIQUE = 'L - Salles polyvalentes non visée par le Type X (salle polyvalente qui n\'a pas une destination unique)',
    L___SALLES_RESERVEES_AUX_ASSOCIATIONS = 'L - Salles réservées aux associations',
    M___AIRES_DE_VENTE = 'M - Aires de vente',
    M___CENTRES_COMMERCIAUX = 'M - Centres commerciaux',
    M___LOCAUX_DE_VENTE = 'M - Locaux de vente',
    M___MAGASIN_DE_VENTE = 'M - Magasin de vente',
    N___BARS = 'N - Bars',
    N___BRASSERIES = 'N - Brasseries',
    N___CAFETARIA = 'N - Cafétaria',
    N___CAFES = 'N - Cafés',
    N___CANTINES = 'N - Cantines',
    N___DEBITS_DE_BOISSONS = 'N - Débits de boissons',
    N___RESTAURANTS = 'N - Restaurants',
    O___HOTELS = 'O - Hôtels',
    O___PENSIONS_DE_FAMILLE = 'O - Pensions de famille',
    OA___HOTELS_RESTAURANTS_DALTITUDE = 'OA - Hôtels-restaurants d\'altitude',
    P___SALLE_DE_BALS = 'P - Salle de bals',
    P___DANCING___DISCOTHEQUE = 'P - Dancing / discothèque',
    P___SALLES_DE_JEUX = 'P - Salles de jeux',
    PA___ARENES = 'PA - Arènes',
    PA___HIPPODROMES = 'PA - Hippodromes',
    PA___PISCINES = 'PA - Piscines',
    PA___PISTES_DE_PATINAGE = 'PA - Pistes de patinage',
    PA___STADES = 'PA - Stades',
    PA___TERRAINS_DE_SPORT = 'PA - Terrains de sport',
    PA___PARC_DATTRACTION = 'PA - Parc d\'attraction',
    PE_2_2___LOCAUX_A_USAGE_COLLECTIF_DUNE_SURFACE_UNITAIRE_SUPERIEURE_A_50_METRES_CARRES_DES_LOGEMENTS_FOYERS_ET_DE_LHABITAT_DE_LOISIRS_A_GESTION_COLLECTIVE = 'PE 2_2 - Locaux à usage collectif d\'une surface unitaire supérieure à 50 mètres carrés des logements-foyers et de l\'habitat de loisirs à gestion collective',
    PE_2_2___BATIMENTS_OU_LOCAUX_A_USAGE_DHEBERGEMENT_QUI_NE_RELEVENT_DAUCUN_TYPE_DEFINI_A_LARTICLE_GN_1_ET_QUI_PERMETTENT_DACCUEILLIR_PLUS_DE_15_ET_MOINS_DE_100_PERSONNES_NY_ELISANT_PAS_DOMICILE = 'PE 2_2 - Bâtiments ou locaux à usage d\'hébergement qui ne relèvent d\'aucun type défini à l\'article GN 1 et qui permettent d\'accueillir plus de 15 et moins de 100 personnes n\'y élisant pas domicile',
    PE_2_2___HEBERGEMENT_DE_MINEURS_EN_DEHORS_DE_LEURS_FAMILLES_LE_SEUIL_DE_LEFFECTIF_EST_FIXE_A_7_MINEURS = 'PE 2_2 - Hébergement de mineurs en dehors de leurs familles, le seuil de l\'effectif est fixé à 7 mineurs',
    PE_2_2___MAISONS_DASSISTANTS_MATERNELS__MAM_DONT_LES_LOCAUX_ACCESSIBLES_AU_PUBLIC_SONT_STRICTEMENT_LIMITES_A_UN_SEUL_ETAGE_SUR_REZ_DE_CHAUSSEE_ET_DONT_LEFFECTIF_NE_DEPASSE_PAS_16_ENFANTS = 'PE 2_2 - Maisons d\'assistants maternels (MAM) dont les locaux accessibles au public sont strictement limités à un seul étage sur rez-de-chaussée et dont l\'effectif ne dépasse pas 16 enfants',
    PS___PARCS_DE_STATIONNEMENT_COUVERTS = 'PS - Parcs de stationnement couverts',
    PS___PARC_DE_STATIONNEMENT_MIXTE = 'PS - Parc de stationnement mixte',
    PS___PARC_DE_STATIONNEMENT_LARGEMENT_VENTILE = 'PS - Parc de stationnement largement ventilé',
    PS___PARC_DE_STATIONNEMENT_A_RANGEMENT_AUTOMATISE = 'PS - Parc de stationnement à rangement automatisé',
    R___AUBERGES_DE_JEUNESSE__COMPRENANT_AU_MOINS_UN_LOCAL_COLLECTIF_A_SOMMEIL = 'R - Auberges de jeunesse (comprenant au moins un local collectif à sommeil)',
    R___AUTO_ECOLES = 'R - Auto-écoles',
    R___CENTRES_AERES = 'R - Centres aérés',
    R___CENTRES_DE_LOISIRS__SANS_HEBERGEMENT = 'R - Centres de loisirs (sans hébergement)',
    R___CENTRES_DE_VACANCES = 'R - Centres de vacances',
    R___COLONIES_DE_VACANCES = 'R - Colonies de vacances',
    R___CRECHES = 'R - Crèches',
    R___ECOLES_MATERNELLES = 'R - Ecoles maternelles',
    R___ETABLISSEMENTS_DENSEIGNEMENT = 'R - Etablissements d\'enseignement',
    R___ETABLISSEMENTS_DE_FORMATION = 'R - Etablissements de formation',
    R___HALTES_GARDERIES = 'R - Haltes-garderies',
    R___INTERNATS_DES_ETABLISSEMENTS_DE_LENSEIGNEMENT_PRIMAIRE_ET_SECONDAIRE = 'R - Internats des établissements de l\'enseignement primaire et secondaire',
    R___JARDINS_DENFANT = 'R - Jardins d\'enfant',
    R___LYCEE_PUBLIC = 'R - Lycee public',
    R___COLLEGE_PUBLIC = 'R - Collège public',
    R___LYCEE_PRIVE = 'R - Lycee privé',
    R___COLLEGE_PRIVE = 'R - Collège privé',
    R___COLE_ELEMENTAIRE = 'R - École élémentaire',
    REF___REFUGES_DE_MONTAGNE = 'REF - Refuges de montagne',
    S___BIBLIOTHEQUES = 'S - Bibliothèques',
    S___CENTRES_DE_DOCUMENTATION_ET_DE_CONSULTATION_DARCHIVES = 'S - Centres de documentation et de consultation d\'archives',
    SG___STRUCTURES_GONFLABLES = 'SG - Structures gonflables',
    T___ETABLISSEMENTS_A_VOCATION_COMMERCIALE_DESTINES_A_DES_EXPOSITIONS = 'T - Etablissements à vocation commerciale destinés à des expositions',
    T___FOIRES_EXPOSITIONS = 'T - Foires-expositions',
    T___SALLES_DEXPOSITIONS_A_CARACTERE_PERMANENT_NAYANT_PAS_UNE_VOCATION_DE_FOIRE_OU_DE_SALON = 'T - Salles d\'expositions à caractère permanent n\'ayant pas une vocation de foire ou de salon',
    T___SALLES_DEXPOSITIONS_A_CARACTERE_PERMANENT_DE_VEHICULES_AUTOMOBILES_BATEAUX_MACHINES_ET_AUTRES_VOLUMINEUX_BIENS_DEQUIPEMENTS_ASSIMILABLES = 'T - Salles d\'expositions à caractère permanent de véhicules automobiles, bateaux, machines et autres volumineux biens d\'équipements assimilables',
    T___SALONS_A_CARACTERE_TEMPORAIRE = 'T - Salons à caractère temporaire',
    U___ETABLISSEMENTS_DE_CURE_THERMALE_OU_DE_THALASSOTHERAPIE = 'U - Etablissements de cure thermale ou de thalassothérapie',
    U___ETABLISSEMENTS_DE_SANTE_PUBLICS_OU_PRIVES_DISPENSANT_DES_SOINS_DE_COURTE_DUREE_EN_MEDECINE_CHIRURGIE_OBSTETRIQUE = 'U - Etablissements de santé publics ou privés dispensant des soins de courte durée en médecine, chirurgie, obstétrique',
    U___ETABLISSEMENTS_DE_SANTE_PUBLICS_OU_PRIVES_DISPENSANT_DES_SOINS_DE_PSYCHIATRIE_DE_SUITE_OU_DE_READAPTATION_DES_SOINS_DE_LONGUE_DUREE_A_DES_PERSONNES_NAYANT_PAS_LEUR_AUTONOMIE_DE_VIE_DONT_LETAT_NECESSITE_UNE_SURVEILLANCE_MEDICALE_CONSTANTE = 'U - Etablissements de santé publics ou privés dispensant des soins de psychiatrie, de suite ou de réadaptation, des soins de longue durée, à des personnes n\'ayant pas leur autonomie de vie dont l\'état nécessite une surveillance médicale constante',
    U___POUPONNIERES__ENFANTS_DE_MOINS_DE_3_ANS = 'U - Pouponnières (enfants de moins de 3 ans)',
    V___EGLISES = 'V - Eglises',
    V___MOSQUEES = 'V - Mosquées',
    V___SYNAGOGUES = 'V - Synagogues',
    V___TEMPLES = 'V - Temples',
    W___ADMINISTRATIONS = 'W - Administrations',
    W___BANQUES = 'W - Banques',
    W___BUREAUX = 'W - Bureaux',
    X___MANEGES = 'X - Manèges',
    X___PATINOIRES = 'X - Patinoires',
    X___PISCINES_COUVERTES_TRANSFORMABLES_ET_MIXTES = 'X - Piscines couvertes, transformables et mixtes',
    X___SALLES_DEDUCATION_PHYSIQUE_ET_SPORTIVE = 'X - Salles d\'éducation physique et sportive',
    X___SALLES_OMNISPORTS = 'X - Salles omnisports',
    X___SALLES_POLYVALENTES_A_DOMINANTE_SPORTIVE_DONT_LAIRE_DACTIVITE_EST_INFERIEURE_A_1200_M_ET_LA_HAUTEUR_SOUS_PLAFOND_SUPERIEURE_OU_EGALE_A_650_METRES = 'X - Salles polyvalentes à dominante sportive, dont l\'aire d\'activité est inférieure à 1200 m² et la hauteur sous plafond supérieure ou égale à 6,50 mètres',
    X___SALLES_SPORTIVES_SPECIALISEES = 'X - Salles sportives spécialisées',
    Y___MUSEES = 'Y - Musées',
    Y___SALLES_DESTINEES_A_RECEVOIR_DES_EXPOSITIONS_A_VOCATION_CULTURELLE_SCIENTIFIQUE_TECHNIQUE_ARTISTIQUE_ETC__AYANT_UN_CARACTERE_TEMPORAIRE = 'Y - Salles destinées à recevoir des expositions à vocation culturelle, scientifique, technique, artistique, etc. ayant un caractère temporaire'
}

export enum CategorieEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5
}

export enum GroupementEtablissementEnum {
    NON_CONCERNE = 'Non concerné',
    GROUPEMENT_DETABLISSEMENT_ISOLE__GN3 = 'Groupement d\'établissement isolé (GN3)',
    GROUPEMENT_DETABLISSEMENT_NON_ISOLE__GN2 = 'Groupement d\'établissement non isolé (GN2)',
    BATIMENT_UNIQUE = 'Bâtiment unique'
}

export enum PlancherBasDuDernierNiveauEnum {
    _8M = '<8m',
    _8M2 = '=>8m'
}

export enum PlancherBasDuDernierNiveauAccessibleAuPublicEnum {
    _8M = '<8m',
    _8M2 = '=>8m'
}

export enum IsolementContigusRealiseDegreCfEnum {
    _1H = '1h',
    _2H = '2h',
    _3H = '3h',
    AUTRE = 'Autre',
    NON_CONCERNE = 'Non concerné'
}

export enum AirLibreEnum {
    _DE_4M = '- de 4m',
    _4M_OU_PLUS = '4m ou plus',
    _5M_OU_PLUS = '5m ou plus',
    _DE_8M = '- de 8m',
    _8M_OU_PLUS = '8m ou plus',
    NON_CONCERNE = 'Non concerné'
}

export enum VisAVisEnum {
    _DE_5M = '- de 5m',
    _5M_OU_PLUS = '5m ou plus',
    _8M_OU_PLUS = '8m ou plus',
    _DE_8M = '- de 8m',
    NON_CONCERNE = 'Non concerné'
}

export enum IsolementSuperposeRealiseDegreCfEnum {
    _1H = '1h',
    _2H = '2h',
    _3H = '3h',
    AUTRE = 'Autre',
    NON_CONCERNE = 'Non concerné'
}

export enum StructureSfEnum {
    _1_2H = '1/2h',
    _1H = '1h',
    _2H = '2h',
    _3H = '3h',
    AUTRE = 'Autre'
}

export enum PlancherSfEnum {
    _1_2H = '1/2h',
    _1H = '1h',
    _2H = '2h',
    _3H = '3h',
    AUTRE = 'Autre'
}

export enum TypeCloisonnementEnum {
    TRADITIONNELS = 'Traditionnels',
    SECTEURS = 'Secteurs',
    COMPARTIMENTS = 'Compartiments'
}

export enum PuissanceChaufferieEnum {
    _70K_W = '<=70kW',
    _70K_W2 = '>70kW',
    NON = 'Non'
}

export enum TypeDeChauffageEnum {
    SOUS_STATION = 'Sous-station',
    CHAUFFERIE = 'Chaufferie',
    CLIMATISATION = 'Climatisation',
    AEROTHERMIQUE = 'Aerothermique',
    ROOFTOP = 'Rooftop',
    CHAUFFAGE_URBAIN = 'Chauffage urbain',
    AUTRE = 'Autre'
}

export enum PuissanceCuisineEnum {
    _20K_W = '<=20kW',
    _20K_W2 = '>20kW',
    NON = 'Non'
}

export enum TypeDeCuisineEnum {
    OUVERTE = 'Ouverte',
    FERMEE = 'Fermée'
}

export enum SystemeVentilationEnum {
    MECANIQUE = 'Mécanique',
    NATURELLE = 'Naturelle',
    VENTILATEUR_DEXTRACTION = 'Ventilateur d\'extraction'
}

export enum InstallationExtinctionEnum {
    AUTOMATIQUE_SPRINKLER = 'Automatique sprinkler',
    MANUELLE = 'Manuelle',
    BROUILLARD_DEAU = 'Brouillard d\'eau',
    AUTRE = 'Autre'
}

export enum ServiceDeSecuriteIncendieEnum {
    PERSONNEL_DESIGNE_ET_FORME = 'Personnel désigné et formé',
    SSIAP = 'SSIAP',
    SAPEURS_POMPIERS = 'Sapeurs-pompiers',
    COMBINAISON_DES_DIFFERENTES_POSSIBILITES = 'Combinaison des différentes possibilités'
}

export enum TypeSsiEnum {
    E = 'E',
    D = 'D',
    C = 'C',
    B = 'B',
    A = 'A'
}

export enum TypeAlarmeEnum {
    _4 = '4',
    _3 = '3',
    _2_B = '2B',
    _2_A = '2A',
    _1 = '1'
}

export enum AutreSystemeAlerteEnum {
    TELEPHONE_URBAIN_FIXE_OU_BOX_SECOURUE = 'Telephone urbain fixe ou box secourue',
    GSM = 'GSM'
}

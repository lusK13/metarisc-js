# Metarisc JS

La librairie Metarisc JS offre un accès simple et pratique à l'API Metarisc à partir d'applications écrites en langage JS. Elle comprend un ensemble de classes et de fonctions pour l'ensemble des ressources de l'API.

## NPM

Vous pouvez installer la librairie en utilisant [NPM](https://www.npmjs.com). Exécutez la commande suivante dans votre projet :

```bash
npm i @metarisc/metarisc-js
```

Pour utiliser la librairie, il suffit de l'importer comme ceci :

```ts
import { Metarisc } from "@metarisc/metarisc-js";
```

## Utilisation

### Requêtes

Pour effectuer une requête sur Metarisc, il faut tout d'adord initialisé le client metarisc de cette manière :

```ts
const m = new Metarisc({
    metarisc_url: "https://api.metarisc.fr"
});

await m.authenticate(AuthMethod.CLIENT_CREDENTIALS, {
    scope: 'openid profile email',
    client_id: "client_id",
    client_secret: "client_secret"
});

m.dossiers.getDossier("123456");
```

Ensuite vous pouvez faire vos requêtes.

#### Requêtes simple

Pour faire un appel API après initialisation du client, vous pouvez utiliser l'accès rapide à l'API souhaitée.

Exemple :

```ts
m.dossiers.getDossier("123456");
```

Le type de retour d'une requête simple est :

```ts
Promise<AxiosResponse<T>>;
```

(voir les documentations suivantes [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) et [AxiosResponse](https://axios-http.com/docs/res_schema))

#### Requêtes paginées

Pour récupérer des résultats paginés Metarisc (voir la [documentation](http://metarisc.fr/docs/api/#/#pagination)), il suffit de faire appel à l'api souhaitée de la même manière que pour une requête simple.

Exemple :

```ts
const m = new Metarisc(config);
m.NotificationsAPI.paginateNotifications();
```

Le type de retour d'une requête paginée est :

```ts
AsyncGenerator<T>;
```

(voir la documentation suivante [AsyncGenerator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator))

#### Écouteur d'événements pour les requêtes

Il est possible d'ajouter un écouteur d'événements sur chaque requête effectuée par le client Metarisc. Pour ce faire, vous pouvez utiliser la méthode on() de l'objet core, en spécifiant le nom de l'événement on("request", function)

```ts
m.on("request", (config: Event): void => {
    //Action à effectuer à chaque requête
});
```

Cet écouteur est particulièrement utile pour effectuer des vérifications, comme la validation du token d'authentification avant l'envoi de chaque requête.

La fonction de rappel (callback) reçoit en paramètre un objet Event. Cet objet contient une propriété detail, où sont stockées toutes les informations relatives à la requête entrante.

```ts
m.on("request", (config: Event): void => {
    console.log(config.detail); // Retourne un objet de type RequestConfig
    //{
    //body?: any;
    //headers?: { [name: string]: string | string[] };
    //params?: { [param: string]: string | string[] };
    //endpoint?: string;
    //method?: string;
    //}
});
```

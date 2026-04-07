// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";

export class HealthcheckAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Assurez-vous que tous nos services sont opérationnels en effectuant des appels API vers le point de terminaison de contrôle d'intégrité. Ce point de terminaison exécute des contrôles d'intégrité et renvoie un état qui vous indique si le service Metarisc est fonctionnel ou non.
     */
    verify(
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/healthcheck'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
}

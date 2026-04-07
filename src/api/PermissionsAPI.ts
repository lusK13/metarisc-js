// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Permission } from '../model/Permission';

export class PermissionsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Retourne l'ensemble des permissions de l'utilisateur Metarisc connecté.
     */
    get(
    ) : Promise<AxiosResponse<{data: Permission[]}>>
    {
        const pathVariable = { };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/permissions'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
}

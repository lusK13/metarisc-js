// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";

export class MainsCourantesParticipantsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Suppression d'une participation d'une main courante.
     */
    deleteParticipant(
        participantId: string
    ) : Promise<AxiosResponse<void>>
    {
        const pathVariable = { 'participant_id': (new String(participantId)).toString() };
        return this.request({
            method: 'DELETE',
            endpoint: Utils.constructPath(pathVariable, '/mains_courantes_participants/{participant_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
}

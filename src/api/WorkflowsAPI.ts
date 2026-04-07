// File generated from our OpenAPI spec
import { Core, MetariscConfig } from "../core";
import { Utils } from "../utils";
import type { AxiosResponse } from "axios";
import { Client } from "../client";
import { Workflow } from '../model/Workflow';

export class WorkflowsAPI extends Core {
    constructor(config: MetariscConfig, client?: Client) {
        super(config, client);
    }
    
    /**
     * Récupération des détails d'un workflow.
     */
    getWorkflowsDetails(
        workflowId: string
    ) : Promise<AxiosResponse<Workflow>>
    {
        const pathVariable = { 'workflow_id': (new String(workflowId)).toString() };
        return this.request({
            method: 'GET',
            endpoint: Utils.constructPath(pathVariable, '/workflows/{workflow_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }]
        });
    }
    
    /**
     * Mise à jour d'un workflow. La mise à jour d'un workflow peut concerner son champ observations. Il est possible de modifier son état ce qui peut déclencher des actions. La modification de l'état peut être antidatée en précisant une date de fin (par défaut la date du jour).
     */
    updateWorkflowsDetails(
        workflowId: string,
        params : any
    ) : Promise<AxiosResponse<Workflow>>
    {
        const pathVariable = { 'workflow_id': (new String(workflowId)).toString() };
        return this.request({
            method: 'POST',
            endpoint: Utils.constructPath(pathVariable, '/workflows/{workflow_id}'),
            transformResponse: [(data) => {
                const parsedData = JSON.parse(data);
                return parsedData;
            }],
            body: Utils.payloadFilter(params)
        });
    }
    
}

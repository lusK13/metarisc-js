import { AxiosResponse } from "axios";
import { Core } from "./core";

export type PaginationResults<T> = {
    data?: Array<T>;
    meta?: {
        pagination?: PaginationData;
    };
};

export type PaginationData = {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
};

type PaginationRequestConfig = {
    method?: 'GET' | 'POST';
    headers?: {[name: string]: string | string[]};
    params?: {[param: string]: string | string[]};
    data?: Record<string, unknown>;
    endpoint?: string;
};

export class Collection<T>
{
    constructor(
        private client : Core,
        private config : PaginationRequestConfig
    ) {}

    /**
     * Fetch current page results.
     */
    async fetchPage(page: number, per_page: number): Promise<AxiosResponse<PaginationResults<T>>> {
        const paginationParams = {
            page: page.toString(),
            per_page: per_page.toString()
        };
        
        if (this.config.method === 'POST') {
            return this.client.request({
                method: 'POST',
                endpoint: 'search/' + this.config.endpoint,
                headers: this.config.headers,
                body: this.config.data,
                params: paginationParams
            });
        }
        
        return this.client.request({
            method: 'GET',
            endpoint: this.config.endpoint,
            headers: this.config.headers,
            params: { ...this.config.params, ...paginationParams }
        });
    }

    /**
     * Generates an iterator to automatically iterate over all pages in a result set.
     */
    async * autoPagingIterator() : AsyncGenerator<T, void, unknown>
    {
        let current_page : number = this.config.params && 'page' in this.config.params && this.config.params['page'] !== undefined ? parseInt(this.config.params['page'].toString()) : 1;
        const per_page : number = this.config.params && 'per_page' in this.config.params && this.config.params['per_page'] !== undefined ? parseInt(this.config.params['per_page'].toString()) : 100;

        while (true) {
            const response = <AxiosResponse<PaginationResults<T>>> await this.fetchPage(current_page, per_page);

            for (const element of response.data.data) {
                yield element;
            }

            if (response.data.meta.pagination.current_page === response.data.meta.pagination.total_pages) {
                break;
            }

            current_page++;
        }
    }

    /**
     * Generates an array with all results set.
     */
    async autoPagingIteratorToArray(limit?: number) : Promise<Array<T>>
    {
        const generator = this.autoPagingIterator();
        const results = [];
        
        limit = limit ?? 1000;

        if (limit > 1000) {
            throw Error(
                'You cannot specify a limit of more than 1,000 items to fetch in `autoPagingIteratorToArray`; use `autoPagingIterator` to iterate through longer lists.'
            );
        }

        for await (const item of generator) {
            results.push(item);
            if (results.length >= limit) {
                break;
            }
        }

        return results;
    }
}
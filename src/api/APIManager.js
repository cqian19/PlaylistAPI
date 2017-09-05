/**
 * Created by cqian19 on 8/16/2017.
 */
import axios from 'axios';

import { Error } from './Error';
import { DOMAIN_TYPES, GET_TYPES } from '../constants';
import { DOMAIN_PROPS } from '../domain-map-constants';

export class APIManager {

    static handleRequest(domain, type, params) {
        const domainProps = DOMAIN_PROPS[domain];
        if (!domainProps) {
            return new Error("Domain not supported by this API");
        }
        const API = domainProps.API;
        const response =  API.getResource(type, params);
        return response ? response : new Error("Resource cannot be requested from this domain");
    }

    static checkError(domain, type, response) {
        const domainProps = DOMAIN_PROPS[domain];
        const API = domainProps.API;
        return API.checkError(type, response);
    }
}
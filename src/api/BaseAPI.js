/**
 * Created by cqian19 on 8/16/2017.
 */

import { Error } from './Error';
import { GET_TYPES } from '../constants';
import { DOMAIN_PROPS } from '../domain-map-constants';

export default class BaseAPI {

    static DOMAIN_TYPE = "";

    static getResource(type, params) {
        switch(type) {
            case GET_TYPES.KEY:
                return this.fetchKey();
            case GET_TYPES.PLAYLIST:
                return this.fetchPlaylist(params);
            case GET_TYPES.STREAM:
                return this.fetchStream(params);
            case GET_TYPES.VIDEO:
                return this.fetchVideo(params);
            default:
                return new Error("Resource type does not exist");
        }
    }

    static getKey() {
        return DOMAIN_PROPS[this.DOMAIN_TYPE].key;
    }

    static fetchKey() {
        const keyPublic = DOMAIN_PROPS[this.DOMAIN_TYPE].public;
        if (!keyPublic) {
            return new Error("Key for this domain is private");
        } else {
            return { key: this.getKey() }
        }
    }

    static fetchVideo(params) {}
    static fetchPlaylist(params) {}
    static fetchStream(params) {}

}
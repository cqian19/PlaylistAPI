/**
 * Created by cqian19 on 8/16/2017.
 */

import axios from 'axios';

import BaseAPI from './BaseAPI';
import { DOMAIN_TYPES } from '../constants';

export class VimeoAPI extends BaseAPI {

    static DOMAIN_TYPE = DOMAIN_TYPES.VIMEO;

    /**
     * @param params.albumId - Id of Vimeo album
     * @returns {AxiosPromise}
     */
    static fetchPlaylist(params) {
        const key = this.getKey();
        return axios.get(`https://api.vimeo.com/albums/${params.albumId}/videos`, {
            params: {
                access_token: key
            }
        });
    }
}
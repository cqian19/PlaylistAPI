/**
 * Created by cqian19 on 8/16/2017.
 */

import axios from 'axios';

import BaseAPI from './BaseAPI';
import { DOMAIN_TYPES } from '../constants';

export class SoundCloudAPI extends BaseAPI {

    static DOMAIN_TYPE = DOMAIN_TYPES.SOUNDCLOUD;

    /**
        @param params.url - SoundCloud url to video
        @return {AxiosPromise}
     */
    static fetchVideo(params) {
        const client_id = this.getKey();
        return axios.get("http://api.soundcloud.com/resolve", {
            params: {
                url: params.url,
                client_id
            }
        });
    }

    static fetchPlaylist = SoundCloudAPI.fetchVideo;
}
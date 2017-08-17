/**
 * Created by cqian19 on 8/16/2017.
 */

import axios from 'axios';

import BaseAPI from './BaseAPI';
import { DOMAIN_TYPES } from '../constants';

export class TwitchAPI extends BaseAPI {

    static DOMAIN_TYPE = DOMAIN_TYPES.TWITCH;

    /**
     * @param params.id - Id of Twitch video
     * @returns {AxiosPromise}
     */
    static fetchVideo(params) {
        const key = this.getKey();
        return axios.get(`https://api.twitch.tv/kraken/videos/${params.id}`, {
            headers: {
                'Client-ID': key
            }
        });
    }

    /**
     * @param params.username - Username of Twitch streamer
     * @returns {AxiosPromise}
     */
    static fetchStream(params) {
        const key = this.getKey();
        return axios.get(`https://api.twitch.tv/kraken/channels/${params.username}`,{
            headers: {
                'Client-ID': key
            }
        });
    }
}
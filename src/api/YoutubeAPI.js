/**
 * Created by cqian19 on 8/16/2017.
 */

import axios from 'axios';

import BaseAPI from './BaseAPI';
import { DOMAIN_TYPES } from '../constants';

export class YoutubeAPI extends BaseAPI {

    static DOMAIN_TYPE = DOMAIN_TYPES.YOUTUBE;

    static checkError(type, response) {
        return response.data['pageInfo']['totalResults'] === 0;
    }

    /**
     * @param params.id -- Youtube video id
     * @returns {AxiosPromise}
     */
    static fetchVideo(params) {
        const key = this.getKey();
        return axios.get("https://www.googleapis.com/youtube/v3/videos", {
            params: {
                part: 'snippet',
                id: params.id,
                key
            }
        });
    }

    /**
     * @param params.playlistId - Id of Youtube playlist to fetch
     * @returns {AxiosPromise}
     */
    static fetchPlaylist(params) {
        const key = this.getKey();
        return axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
            params: {
                part: 'snippet',
                playlistId: params.playlistId,
                key,
                maxResults: 50
            }
        });
    }
}
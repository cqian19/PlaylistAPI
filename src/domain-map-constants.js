/**
 * Created by cqian19 on 8/16/2017.
 */

import {
    YoutubeAPI,
    VimeoAPI,
    SoundCloudAPI,
    FacebookAPI,
    TwitchAPI
} from './api';
import { DOMAIN_TYPES } from './constants';

export const DOMAIN_PROPS = {
    [DOMAIN_TYPES.YOUTUBE]: {
        'API': YoutubeAPI,
        'key': process.env.YOUTUBE_KEY
    },
    [DOMAIN_TYPES.VIMEO]: {
        'API': VimeoAPI,
        'key': process.env.VIMEO_KEY
    },
    [DOMAIN_TYPES.SOUNDCLOUD]: {
        'API': SoundCloudAPI,
        'key': process.env.SOUNDCLOUD_KEY
    },
    [DOMAIN_TYPES.FACEBOOK]: {
        'API': FacebookAPI,
        'key': process.env.FACEBOOK_KEY
    },
    [DOMAIN_TYPES.TWITCH]: {
        'API': TwitchAPI,
        'key': process.env.TWITCH_KEY
    }
};
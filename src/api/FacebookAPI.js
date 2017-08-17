/**
 * Created by cqian19 on 8/16/2017.
 */

import axios from 'axios';

import BaseAPI from './BaseAPI';
import { DOMAIN_TYPES } from '../constants';

export class FacebookAPI extends BaseAPI{

    static DOMAIN_TYPE = DOMAIN_TYPES.FACEBOOK;

}
/**
 * Created by cqian19 on 8/16/2017.
 */

export class Error {

    constructor(message) {
        this._message = message;
    }

    get message() {
        return this._message;
    }
}
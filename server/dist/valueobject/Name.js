"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Name {
    constructor(first, last = '') {
        this._first = first;
        this._last = last;
    }
    get first() {
        return this._first;
    }
    get last() {
        return this._last;
    }
    full() {
        if (this._last === '') {
            return this._first;
        }
        return this._first + ' ' + this._last;
    }
}
exports.default = Name;

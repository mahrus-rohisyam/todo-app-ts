"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Email {
    constructor(email) {
        let emailParts = email.split('@');
        this._local = emailParts.slice(0, emailParts.length - 1).join();
        this._domain = emailParts[emailParts.length - 1];
    }
    get local() {
        return this._local;
    }
    get domain() {
        return this._domain;
    }
    string() {
        return this._local + '@' + this._domain;
    }
}
exports.default = Email;

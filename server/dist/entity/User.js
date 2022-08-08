"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, password, name) {
        this._name = name;
        this._email = email;
        this._password = password;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
}
exports.default = User;

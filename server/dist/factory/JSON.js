"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JSON {
}
exports.default = JSON;
JSON.user = (user) => {
    return {
        email: user.email.string(),
        name: {
            first: user.name.first,
            last: user.name.last,
            full: user.name.full()
        }
    };
};

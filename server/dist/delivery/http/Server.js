"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
class Server {
    constructor(router) {
        this._router = router;
    }
    run(port) {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use((_, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', String(process.env.ORIGINS));
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'content-type');
            next();
        });
        app.use('/', this._router);
        app.listen(port, () => {
            console.log(`The HTTP server is running on port ${port}.`);
        });
    }
}
exports.default = Server;

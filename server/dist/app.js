"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
require('dotenv').config();
const connection = new mongodb_1.MongoClient(String(process.env.DB_URL));

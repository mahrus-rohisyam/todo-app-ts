import { Router as ExpressRouter } from "express"
import { MongoClient } from "mongodb"
import Handler from "./delivery/http/Handler"
import Router from "./delivery/http/Router"
import Repository from "./repository/Repository"

require('dotenv').config()

const connection: MongoClient = new MongoClient(String(process.env.DB_URL))
// const repository: Repository = 
// const router: ExpressRouter = Router(Handler())
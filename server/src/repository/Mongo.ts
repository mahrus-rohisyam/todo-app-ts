import { MongoClient as Connection } from "mongodb";
import User from "../entity/User";
import Email from "../valueobject/Email";
import Repository from "./Repository";

export default class MongoDB implements Repository {
  private _connection: Connection;

  constructor(connection: Connection) {
    this._connection = connection
  }

  public async get (email: Email): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      let User: User | any
      this._connection.db('todo-app').collection('user').find({}).toArray().then(
        (res) => {
          resolve(res)
        }
      )
      
    })
  }

  public async create(user: User): Promise<void> {
    return new Promise<void> ((resolve, reject) => {
      
    })
  }
}
import Email from "../valueobject/Email";
import Password from "../valueobject/Password";
import Name from "../valueobject/Name";

export default class User {
  private _name: Name
  private _email: Email
  private _password: Password

  constructor(email: Email, password: Password, name: Name) {
    this._name = name
    this._email = email
    this._password = password
  }

  public get name(): Name {
    return this._name
  }

  public get email(): Email {
    return this._email
  }

  public get password(): Password {
    return this._password
  }
}
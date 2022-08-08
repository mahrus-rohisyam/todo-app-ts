import User from "../entity/User"
import Email from "../valueobject/Email"

export default interface Repository {
  get(email: Email): Promise<User>
  create(user: User): Promise<void>
}
import { Router } from "express";
import User from "../../entity/User";
import Repository from "../../repository/Repository";
import Email from "../../valueobject/Email";

export default (repository: Repository) => {
  const router: Router = Router()

  router.get('/', async (req, res) => {
    let email: Email = new Email(req.body.email)
    let user: User = await repository.get(email)

    res.json({
      message: 'Yeyyy',
      email,
      user
    })
  })
}
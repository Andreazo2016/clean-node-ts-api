import { Router } from 'express'
import { makeAddUserController } from '../composerControllers/user/user-composer-controllers'
import { adaptRoute } from '../adapters/express-route-adapter'
export default (router: Router): void => {
  router.post('/addUser', adaptRoute(makeAddUserController()))
}

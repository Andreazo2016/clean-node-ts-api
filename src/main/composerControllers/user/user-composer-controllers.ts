import { Controller } from '../../../presentation/protocols'
import { AddUserController } from '../../../presentation/controllers/user/add-controller'
import { AddUserImplementation } from '../../../usecases/implementations/users/add-implementation'
import { JoiUserAddValidator } from '../../../infra/validators/user/user-add'
import { AddRepositoryFake } from '../../../infra/db/fake/repositories/user/add-repository-fake'

const makeAddUserController = (): Controller => {
  const addUserRepository = new AddRepositoryFake()
  const addUserCase = new AddUserImplementation(addUserRepository)
  const userDataValidator = new JoiUserAddValidator()
  return new AddUserController(addUserCase, userDataValidator)
}

export { makeAddUserController }

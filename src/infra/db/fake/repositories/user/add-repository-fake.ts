import { AddUserRepository } from '../../../../../gateways/repositories/user/add-repository'
import { UserData } from '../../../../../usecases/users/add'
import { User } from '../../../../../entities/User'
export class AddRepositoryFake implements AddUserRepository {
  async add (userData: UserData): Promise<User> {
    const fakeUserCreated: User = {
      id: 'valid_id',
      email: 'valid_email',
      name: 'valid_name',
      password: 'valid_password'
    }
    return fakeUserCreated
  }
}

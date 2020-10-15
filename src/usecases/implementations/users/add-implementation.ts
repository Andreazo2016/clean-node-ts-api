import { AddUser, UserData } from '../../users/add'
import { User } from '../../../entities/User'
import { AddUserRepository } from '../../../gateways/repositories/user/add-repository'

export class AddUserImplementation implements AddUser {
  private readonly addUserRepository: AddUserRepository
  constructor (addUserRepository: AddUserRepository) {
    this.addUserRepository = addUserRepository
  }

  async add (userData: UserData): Promise<User> {
    const userCreated = await this.addUserRepository.add(userData)
    return userCreated
  }
}

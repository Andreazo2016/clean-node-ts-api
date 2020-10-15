import { UserData } from '../../../usecases/users/add'
import { User } from '../../../entities/User'

export interface AddUserRepository{
  add: (userData: UserData) => Promise<User>
}

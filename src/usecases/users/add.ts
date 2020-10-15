import { User } from '../../entities/User'
export interface UserData{
  name: string
  email: string
  password: string
}
export interface AddUser{
  add: (userData: UserData) => Promise<User>
}

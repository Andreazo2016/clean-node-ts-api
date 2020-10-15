
export interface ResponseValidate{
  error: boolean
  errors?: any
}

export interface AddUserData{
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface AddUserDataValidator{
  validate: (userData: AddUserData) => Promise<ResponseValidate>
}

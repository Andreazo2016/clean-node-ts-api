import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { AddUser } from '../../../usecases/users/add'
import { AddUserDataValidator } from '../../user/add-validator'
export class AddUserController implements Controller {
  private readonly addUserCase: AddUser
  private readonly addUserDataValidator: AddUserDataValidator

  constructor (addUserCase: AddUser, addUserDataValidator: AddUserDataValidator) {
    this.addUserCase = addUserCase
    this.addUserDataValidator = addUserDataValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { name, email, password, passwordConfirmation } = httpRequest.body

    try {
      const responseFromValidator = await this.addUserDataValidator.validate({ name, email, password, passwordConfirmation })

      if (responseFromValidator.error) {
        const httpResponse: HttpResponse = {
          statusCode: 400,
          body: { errors: responseFromValidator.errors }
        }

        return httpResponse
      }
      const user = await this.addUserCase.add({
        name,
        email,
        password
      })

      const httpResponse: HttpResponse = {
        statusCode: 200,
        body: user
      }
      return httpResponse
    } catch (error) {
      const httpResponse: HttpResponse = {
        statusCode: 500,
        body: { error }
      }
      return httpResponse
    }
  }
}

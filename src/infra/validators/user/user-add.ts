import Joi from 'joi'
import { AddUserDataValidator, ResponseValidate, AddUserData } from '../../../presentation/user/add-validator'
export class JoiUserAddValidator implements AddUserDataValidator {
  async validate (userData: AddUserData): Promise<ResponseValidate> {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email(),
      password: Joi.string().required().min(6),
      passwordConfirmation: Joi.ref('password')
    })

    const { error } = schema.validate(userData, { abortEarly: false })
    const formatMessage = []
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (error) {
      for (const err of error.details) {
        formatMessage.push({ message: err.message })
      }
    }
    const response: ResponseValidate = {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      error: !!error,
      errors: formatMessage
    }

    return response
  }
}

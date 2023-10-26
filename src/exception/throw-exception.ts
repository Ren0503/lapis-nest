import { HttpException } from "@nestjs/common"
import { ErrorCode } from "./enums"

export interface ThrowExceptionOption {
  message?: string
  code: keyof typeof ErrorCode
  module?: string
}

export function ThrowHttpException(opt: ThrowExceptionOption, statusCode: number) {
  const { message, code, module } = opt
  let messageDefault = message
  if (!messageDefault) {
    switch(code) {
      case 'BadRequest': {
        messageDefault = 'Bad request.'
        break
      }
      case 'Unauthorized': {
        messageDefault = 'Unauthorized, please try to login again.'
        break
      }
      case 'Forbidden': {
        messageDefault = `You don't have permission to access this.`
        break
      }
      case 'DataNotFound': {
        messageDefault = `Not found ${module}`
        break
      }
      case 'ActionNotAllowed': {
        messageDefault = "Action not allowed"
        break
      }
      case 'ExistedData': {
        messageDefault = `Already existed ${module}`
        break
      }
      default:
        messageDefault = "Internal server"
    }
  }

  throw new HttpException({
    code,
    message: messageDefault,
  }, statusCode)
}
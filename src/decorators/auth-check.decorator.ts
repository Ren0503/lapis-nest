import { SetMetadata } from "@nestjs/common"

export enum AuthCheckType {
  None = 'None',
  Authentication = 'Authentication',
  Authorization = 'Authorization',
  ApiKey = 'ApiKey'
}

export const AUTH_CHECK_KEY = 'auth-check'
export const AuthCheck = (type: AuthCheckType) => SetMetadata(AUTH_CHECK_KEY, type)
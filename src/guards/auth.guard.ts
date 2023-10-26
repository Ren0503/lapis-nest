import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AUTH_CHECK_KEY, AuthCheckType } from "decorators";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const authCheck = this.reflector.getAllAndOverride<AuthCheckType>(AUTH_CHECK_KEY, [
      context.getHandler(),
      context.getClass()
    ])

    if (authCheck === AuthCheckType.None) {
      return true
    }

    return true
  }
}
import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { Request } from "express";

export const Input = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest() as Request
    const input = {
      ...req.body,
      ...req.query,
      ...req.params,
    }

    return input
  }
)
import { Response, Request, NextFunction } from "express";

import { RequestValidationError } from "../errors/validationError";
import AuthService from "../services/auth";
import { okay } from "../utils/appUtils";

const { validationResult } = require("express-validator");

async function register(req: Request, res: Response, next: NextFunction) {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new RequestValidationError(error.array()));
  }
  const result = await AuthService.register(req);

  if (result.hasError()) {
    return next(result.error);
  }
  return okay(res,result.payload)
}

async function login(req: Request, res: Response) {}

export default { register, login };

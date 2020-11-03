import { Response, Request, NextFunction } from "express";

import { RequestValidationError } from "../errors/validationError";
import AuthService from "../services/auth";
import { okay } from "../utils/appUtils";

const { validationResult } = require("express-validator");

async function register(req: Request, res: Response, next: NextFunction) {
  const context = "Register";
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new RequestValidationError(error.array()));
  }
  const result = await AuthService.register(req,context);

  if (result.hasError()) {
    return next(result.error);
  }
  return okay(res, result.payload);
}

async function login(req: Request, res: Response, next: NextFunction) {
  const context = "Login";
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new RequestValidationError(error.array()));
  }
  const result = await AuthService.login(req,context);
  if (result.hasError()) {
    return next(result.error);
  }
  return okay(res, result.payload);
}

export default { register, login };

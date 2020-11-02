import { NextFunction, Request, Response } from "express";
import { InvalidAccessTokenError } from "../../errors";

function apiTokenInterceptor(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["app_token"];
   
  if (token !== process.env.APPLICATION_TOKEN) {
    throw new InvalidAccessTokenError();
  }
  return next();
}

export { apiTokenInterceptor };

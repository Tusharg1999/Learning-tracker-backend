import { NextFunction, Request, Response } from "express";
import { InvalidAccessTokenError } from "../../errors";
import TokenHub from "../../usecases/auth/tokenHub";

export default async function ensureAuthorization(
  req: any,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers;

    if (authorization === undefined) {
      throw new InvalidAccessTokenError();
    }
    const token = await TokenHub.verifyAccessToken(authorization);
    req.user = token.id;
    next();
  } catch (e) {
    next(e);
  }
}

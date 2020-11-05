import { NextFunction, Request, Response } from "express";
import { InvalidAccessTokenError } from "../../errors";
import TokenHub from "../../usecases/auth/tokenHub";

async function ensureAuthorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers;
    if (authorization === null) {
      throw new InvalidAccessTokenError();
    }
    await TokenHub.verifyAccessToken(authorization);
    next();
  } catch (e) {
    next(e);
  }
}

export default { ensureAuthorization };

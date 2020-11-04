import { NextFunction } from "express";

async function ensureAuthorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
}

export default { ensureAuthorization };

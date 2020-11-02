import { NextFunction, Request, Response } from "express";
import { BaseError } from "../../errors/baseError";

function appErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!(err instanceof BaseError)) {
    res.status(500).send([{ message: "Internal Server Error" }]);
  } else {
    res.status(err.statusCode).send(err.serializeError());
  }
}

export { appErrorHandler };

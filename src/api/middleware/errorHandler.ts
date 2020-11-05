import { NextFunction, Request, Response } from "express";
import { BaseError } from "../../errors/baseError";

function appErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if(err instanceof BaseError){
    return res.status(err.statusCode).send({ errors: err.serializeError() });
  }
  if (!(err instanceof BaseError)) {
    console.log(err);
    return res.status(500).send([{ message: "Internal Server Error" }]);
  }
}

export { appErrorHandler };

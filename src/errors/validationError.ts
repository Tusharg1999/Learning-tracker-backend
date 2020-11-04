import { BaseError } from "./baseError";

class RequestValidationError extends BaseError {
  statusCode = 422;
  error: any;

  constructor(err: any) {
    super();
    this.error = err;
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeError() {
    return this.error.map((err:any) => {
      return {
        message: err.msg,
        field: err.param,
      };
    });
  }
}

export { RequestValidationError };

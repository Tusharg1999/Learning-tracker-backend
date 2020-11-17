import { BaseError } from "./baseError";

class BadRequest extends BaseError {
  statusCode = 401;
  error = "Bad Request";
  constructor() {
    super();
    Object.setPrototypeOf(this, BadRequest.prototype);
  }
  serializeError() {
    return [
      {
        message: this.error,
      },
    ];
  }
}

export {BadRequest}
import { BaseError } from "./baseError";

class InvalidAccessTokenError extends BaseError {
  statusCode = 401;
  error = "Invalid Access Token";

  constructor() {
    super();
    Object.setPrototypeOf(this, InvalidAccessTokenError.prototype);
  }

  serializeError() {
    return [
      {
        message: this.error,
      },
    ];
  }
}

export { InvalidAccessTokenError };

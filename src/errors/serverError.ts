import { BaseError } from "./baseError";

export default class ServerError extends BaseError {
  statusCode = 500;
  error = "Internal server error";
  constructor() {
    super();
    Object.setPrototypeOf(this, ServerError.prototype);
  }
  serializeError() {
    return [
      {
        message: this.error,
      },
    ];
  }
}

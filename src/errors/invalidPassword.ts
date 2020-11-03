import { BaseError } from "./baseError";

export class InvalidPassword extends BaseError {
  statusCode = 401;
  error: string;
  constructor(err: string) {
    super();
    this.error = err;
    Object.setPrototypeOf(this, InvalidPassword.prototype);
  }
  serializeError() {
    return [
      {
        message: this.error,
      },
    ];
  }
}

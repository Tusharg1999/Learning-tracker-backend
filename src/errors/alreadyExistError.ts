import { BaseError } from "./baseError";

class AlreadyExistError extends BaseError {
  statusCode = 401;
  error: string;

  constructor(err: string) {
    super();
    this.error = err;
    Object.setPrototypeOf(this, AlreadyExistError.prototype);
  }

  serializeError() {
    return [
      {
        message: this.error,
      },
    ];
  }
}
export { AlreadyExistError };

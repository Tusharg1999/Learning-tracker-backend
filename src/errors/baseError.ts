export abstract class BaseError extends Error {
  abstract statusCode: number;
  abstract error: string | string[];

  constructor() {
    super();
    Object.setPrototypeOf(this, BaseError.prototype);
  }
  abstract serializeError(): {
    message: string;
    field?: string;
  }[];
}

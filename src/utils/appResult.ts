import { BaseError } from "../errors/baseError";

export default class AppResult<R> {
  payload: R;
  error?: BaseError;

  constructor(payload: R, error: BaseError) {
    this.payload = payload;
    this.error = error;
  }

  hasError() {
    return this instanceof ErrorResult;
  }

  isSuccessful() {
    return this instanceof SuccessResult;
  }
}

export class SuccessResult<R> extends AppResult<R> {
  constructor(payload: R) {
    super(payload, null);
  }
}

export class ErrorResult extends AppResult<any> {
  constructor(error?: BaseError) {
    super(null, error);
  }
}

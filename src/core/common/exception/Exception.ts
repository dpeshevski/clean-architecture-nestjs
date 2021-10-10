import { CodeDescription } from '@core/common/code/Code';
import { Optional } from '@core/common/type/CommonTypes';

export type CreateExceptionPayload<T> = {
  code: CodeDescription,
  overrideMessage?: string,
  data?: T
}

export class Exception<T> extends Error {
  public readonly code: number;
  public readonly data: Optional<T>;
  private constructor(codeDescription: CodeDescription, overrideMessage?: string, data?: T) {
    super();
    this.name = this.constructor.name;
    this.code = codeDescription.code;
    this.data = data;
    this.message = overrideMessage || codeDescription.message;

    Error.captureStackTrace(this, this.constructor);
  }
  public static new<T>(payload: CreateExceptionPayload<T>): Exception<T> {
    return new Exception(payload.code, payload.overrideMessage, payload.data);
  }
}
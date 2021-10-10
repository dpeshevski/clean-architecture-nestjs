import { Code } from '@core/common/code/Code';
import { Nullable } from '@core/common/type/CommonTypes';

export class Response<T> {
  public readonly code: number;
  public readonly message: string;
  public readonly timestamp: number;
  public readonly data: Nullable<T>;
  private constructor(code: number, message: string, data?: T) {
    this.code = code;
    this.message = message;
    this.data = data || null;
    this.timestamp = Date.now();
  }
  public static success<T>(data?: T, message?: string): Response<T> {
    const resultCode: number = Code.SUCCESS.code;
    const resultMessage: string = message || Code.SUCCESS.message;

    return new Response(resultCode, resultMessage, data);
  }
  public static error<T>(code?: number, message?: string, data?: T): Response<T> {
    const resultCode: number = code || Code.INTERNAL_ERROR.code;
    const resultMessage: string = message || Code.INTERNAL_ERROR.message;

    return new Response(resultCode, resultMessage, data);
  }
}

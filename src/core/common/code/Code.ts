export type CodeDescription = {
  code: number,
  message: string,
};

export class Code {
  public static SUCCESS: CodeDescription = {
    code: 200,
    message: 'Success.'
  };

  public static BAD_REQUEST: CodeDescription = {
    code: 400,
    message: 'Bad request.'
  };

  public static UNAUTHORIZED: CodeDescription = {
    code: 401,
    message: 'Unauthorized.'
  }

  public static WRONG_REQUEST: CodeDescription = {
    code: 402,
    message: 'Wrong request.'
  }

  public static ACCESS_DENIED: CodeDescription = {
    code: 403,
    message: 'Access denied.'
  }

  public static INTERNAL_ERROR: CodeDescription = {
    code: 500,
    message: 'Internal error.'
  }

  public static ENTRY_NOT_FOUND: CodeDescription = {
    code: 1000,
    message: 'Entry not found.'
  }

  public static ENTRY_VALIDATION_ERROR: CodeDescription = {
    code: 1001,
    message: 'Entry validation error.'
  }

  public static USE_CASE_PORT_VALIDATION_ERROR: CodeDescription = {
    code: 1002,
    message: 'Use-case port validation error.'
  }

  public static VALUE_OBJECT_VALIDATION_ERROR: CodeDescription = {
    code: 1003,
    message: 'Value object validation error.'
  }

  public static ENTITY_ALREADY_EXISTS: CodeDescription = {
    code: 1004,
    message: 'Entity already exists.'
  }
}

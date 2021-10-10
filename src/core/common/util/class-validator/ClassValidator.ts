import { validate, ValidationError } from 'class-validator';

import { Optional } from '@core/common/type/CommonTypes';

export type ClassValidationDetails = {
  context: string;
  errors: ClassValidationErrors[]
}

export type ClassValidationErrors = {
  property: string;
  message: string[];
}

export class ClassValidator {
  public static async validate<T extends object>(target: T, context?: string): Promise<Optional<ClassValidationDetails>> {
    let details: Optional<ClassValidationDetails>
    const errors: ValidationError[] = await validate(target);

    if (errors.length) {
      details = {
        context: context || target.constructor.name,
        errors: []
      };

      for (const error of errors) {
        details.errors.push({
          property: error.property,
          message: error.constraints ? Object.values(error.constraints) : []
        });
      }
    }
    return details;
  }
}
import { BadRequestException } from "@nestjs/common";
import { ValidationError } from "class-validator";
import {ERRORS} from "../validator/errors";

export const classValidatorErrors = {
  isLength: ERRORS.INVALID_LENGTH,
  isEmail: ERRORS.INVALID_EMAIL,
  unknown: ERRORS.UNKNOWN_ERROR,
};

const validatorFactory = (errors: ValidationError[]) => {
  const result = errors.map((error) => ({
    property: error.property,
    original: error.constraints,
    message: (() => {
      const e = Object.keys(error.constraints).map(
        (key) => classValidatorErrors[key] || classValidatorErrors.unknown,
      );
      return e;
    })(),
  }));

  return new BadRequestException(result);
};

export default validatorFactory;

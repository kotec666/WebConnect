import {HttpException, HttpStatus} from "@nestjs/common";
import classValidatorLikeError from "./classValidatorLikeError";
import fieldError from "./fieldError";
import {ERRORS} from "../validator/errors";

const throwError = (field: string, error: ERRORS, code?: HttpStatus) => {
  throw new HttpException(
    classValidatorLikeError(
      [fieldError(field, [error])],
      code || HttpStatus.BAD_REQUEST,
    ),
    code || HttpStatus.BAD_REQUEST,
  );
}

export default throwError
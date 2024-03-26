import {ERRORS} from "../validator/errors";

export const prismaErrors = {
  P2025: ERRORS.NOT_FOUND,
  P2002: ERRORS.UNIQUE_CONSTANT,
  default: ERRORS.UNKNOWN_ERROR,
};
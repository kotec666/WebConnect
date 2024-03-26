import {ERRORS} from "../validator/errors";

const fieldError = (key: string, errors: ERRORS[]) => ({
  property: key,
  original: {
    classValidatorLikeError: "class validator like error",
  },
  message: errors,
});

export default fieldError;

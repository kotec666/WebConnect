import {ValidationPipe} from "@nestjs/common";
import validatorFactory from "../prisma/validator.factory";
import {PrismaValidatorFilter} from "../prisma/prisma-validator.filter";
import {PrismaErrorsFilter} from "../prisma/prisma-errors.filter";
import {NestExpressApplication} from "@nestjs/platform-express";

const global = (app: NestExpressApplication) => {
  app.setGlobalPrefix("/api");
  app.useGlobalPipes(  new ValidationPipe({
    exceptionFactory: validatorFactory,
  }));
  app.useGlobalFilters(new PrismaValidatorFilter(), new PrismaErrorsFilter());

}

export default global
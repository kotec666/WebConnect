import {NestFastifyApplication} from "@nestjs/platform-fastify";
import {ValidationPipe} from "@nestjs/common";
import validatorFactory from "../prisma/validator.factory";
import {PrismaValidatorFilter} from "../prisma/prisma-validator.filter";
import {PrismaErrorsFilter} from "../prisma/prisma-errors.filter";

const global = (app: NestFastifyApplication) => {
  app.setGlobalPrefix("/api");
  app.useGlobalPipes(  new ValidationPipe({
    exceptionFactory: validatorFactory,
  }));
  app.useGlobalFilters(new PrismaValidatorFilter(), new PrismaErrorsFilter());

}

export default global
import {NestFastifyApplication} from "@nestjs/platform-fastify";
import swagger from "./swagger";
import cookies from "./cookies";
import {ValidationPipe} from "@nestjs/common";
import validatorFactory from "../prisma/validator.factory";
import {PrismaValidatorFilter} from "../prisma/prisma-validator.filter";
import {PrismaErrorsFilter} from "../prisma/prisma-errors.filter";

const entryConfig = (app: NestFastifyApplication) => {
  app.setGlobalPrefix("/api");
  app.useGlobalPipes(  new ValidationPipe({
    exceptionFactory: validatorFactory,
  }));
  app.useGlobalFilters(new PrismaValidatorFilter(), new PrismaErrorsFilter());

  const configs = [swagger, cookies]

  return configs.map((c) => c(app))
}

export default entryConfig
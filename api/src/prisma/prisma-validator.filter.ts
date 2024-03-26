import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Prisma } from "@prisma/client";
import { ERRORS } from "../validator/errors";
import { Response } from "express";

@Catch(Prisma.PrismaClientValidationError)
export class PrismaValidatorFilter extends BaseExceptionFilter {
  // 2
  catch(exception: Prisma.PrismaClientValidationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    Logger.error(exception);

    response.status(HttpStatus.BAD_GATEWAY).json({
      statusCode: HttpStatus.BAD_GATEWAY,
      message: ERRORS.PRISMA_VALIDATE_ERROR,
    });
  }
}

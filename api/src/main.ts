import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import entryConfig from './config/entryConfig';
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );


  entryConfig(app);

  await app.listen(process.env.PORT, '0.0.0.0', () => {
    Logger.log(
      `http://localhost:${process.env.PORT}/api/documentation`,
      'Docs',
    );
  });
}
bootstrap();

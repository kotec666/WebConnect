import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import entryConfig from './config/entryConfig';
import fastifyConfig from "./config/fastifyConfig";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(fastifyConfig()),
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

import { NestFastifyApplication } from '@nestjs/platform-fastify';

const cors = (app: NestFastifyApplication) => {
  app.enableCors({
    origin: process.env.ORIGIN.split(','),
    credentials: true,
  });
};

export default cors;

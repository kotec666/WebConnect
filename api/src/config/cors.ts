import {NestExpressApplication} from "@nestjs/platform-express";

const cors = (app: NestExpressApplication) => {
  app.enableCors({
    origin: process.env.ORIGIN.split(','),
    credentials: true,
  });
};

export default cors;

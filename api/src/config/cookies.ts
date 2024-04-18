import {NestFastifyApplication} from "@nestjs/platform-fastify";
import fastifyCookie from "@fastify/cookie";

const cookies = (app: NestFastifyApplication) => {
  app.register(fastifyCookie, {
    secret: process.env.SECRET, // for cookies signature
    path: "/"
  });
}

export default cookies
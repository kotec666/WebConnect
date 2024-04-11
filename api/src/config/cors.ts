import {NestFastifyApplication} from "@nestjs/platform-fastify";

const cors = (app: NestFastifyApplication) => {
  app.enableCors({
    origin: process.env.ORIGIN.split(",")
  })
}

export default cors
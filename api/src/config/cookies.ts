import {NestExpressApplication} from "@nestjs/platform-express";
import cookieParser from "cookie-parser";

const cookies = (app: NestExpressApplication) => {
  app.use(cookieParser());
}

export default cookies
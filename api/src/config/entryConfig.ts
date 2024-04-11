import {NestFastifyApplication} from "@nestjs/platform-fastify";
import swagger from "./swagger";
import cookies from "./cookies";
import global from "./global";
import cors from "./cors";

const entryConfig = (app: NestFastifyApplication) => {
  const configs = [swagger, cookies, global, cors]

  return configs.map((c) => c(app))
}

export default entryConfig
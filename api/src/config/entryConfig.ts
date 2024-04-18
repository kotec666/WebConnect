import swagger from './swagger';
import cookies from './cookies';
import global from './global';
import cors from './cors';
import {NestExpressApplication} from "@nestjs/platform-express";

const entryConfig = (app: NestExpressApplication) => {
  app.setGlobalPrefix('/api');

  const configs = [swagger, cookies, global, cors];

  return configs.map((c) => c(app));
};

export default entryConfig;

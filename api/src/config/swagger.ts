import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {NestExpressApplication} from "@nestjs/platform-express";

const swagger = (app: NestExpressApplication) => {
  const config = new DocumentBuilder()
    .setTitle('WebConnect api')
    .addBearerAuth()
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/documentation', app, document);

}

export default swagger
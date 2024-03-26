import {NestFastifyApplication} from "@nestjs/platform-fastify";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

const swagger = (app: NestFastifyApplication) => {
  const config = new DocumentBuilder()
    .setTitle('WebConnect api')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/documentation', app, document);

}

export default swagger
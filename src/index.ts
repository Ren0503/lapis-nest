import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { SwaggerModule } from "@nestjs/swagger";
import bodyParser from "body-parser";
import compression from 'compression';
import helmet from "helmet";
import { Logging } from "logger";
import { WinstonModule } from "nest-winston";
import { corOptions, helmetOptions } from "options";
import { swaggerOptions } from "options/swaggerOptions";

const customLoggerService = new Logging()

export async function createServer(app: any, port: number) {
  const server = await NestFactory.create<NestExpressApplication>(app, {
    logger: WinstonModule.createLogger(customLoggerService.createLoggerConfig)
  })

  server.disable("x-powered-by")
  server.use(bodyParser.json({ limit: "50mb" }))
  server.use(bodyParser.urlencoded({ extended: true }))

  server.useGlobalPipes(new ValidationPipe({ transform: true }))
  server.enableCors(corOptions)

  server.use(compression())
  server.use(helmet(helmetOptions))

  const document = SwaggerModule.createDocument(server, swaggerOptions)
  SwaggerModule.setup('docs', server, document)

  await server.listen(port, '0.0.0.0')
  console.log(`Application running on ${await (server.getUrl())}`)
}
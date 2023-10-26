import { NestFactory } from "@nestjs/core";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { corOptions, helmetOptions } from "options";
import compression from '@fastify/compress';
import fastifyHelmet from "@fastify/helmet";
import { SwaggerModule } from "@nestjs/swagger";
import { swaggerOptions } from "options/swaggerOptions";
import { ValidationPipe } from "@nestjs/common";

export async function createServer(app: any, port: number) {
  const server = await NestFactory.create<NestFastifyApplication>(
    app, 
    new FastifyAdapter()
  )

  server.useGlobalPipes(new ValidationPipe({ transform: true }))
  server.enableCors(corOptions)
  
  await server.register(compression)
  await server.register(fastifyHelmet, helmetOptions)

  const document = SwaggerModule.createDocument(server, swaggerOptions)
  SwaggerModule.setup('docs', server, document)

  await server.listen(port, '0.0.0.0')
  console.log(`Application running on ${await (server.getUrl())}`)
}
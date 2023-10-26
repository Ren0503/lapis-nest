import { DocumentBuilder } from "@nestjs/swagger";
import configuration from "config";

const { SWAGGER_SERVER, API_CONTEXT, NODE_ENV } = configuration()

export const swaggerOptions = new DocumentBuilder()
  .setTitle(API_CONTEXT.toUpperCase())
  .setDescription(`${API_CONTEXT.toUpperCase()} Docs`)
  .setVersion('1.0.0')
  .addBearerAuth({ scheme: 'bearer', type: 'http', bearerFormat: 'JWT' }, 'bearerAuth')
  .addApiKey({ type: 'apiKey', in: 'header', name: 'X-API-KEY' }, 'apiKeyAuth')
  .addServer(`${SWAGGER_SERVER}/${API_CONTEXT}`, `${NODE_ENV.toUpperCase() || 'LOCAL'} SERVER`)
  .build()

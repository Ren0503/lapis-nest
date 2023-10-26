import { DocumentBuilder } from "@nestjs/swagger";
import configuration from "config";

const { SWAGGER_SERVER, API_CONTEXT, NODE_ENV } = configuration()

const swaggerOptions = new DocumentBuilder()
  .addBearerAuth({ scheme: 'bearer', type: 'http', bearerFormat: 'JWT' }, 'bearerAuth')
  .addApiKey({ type: 'apiKey', in: 'header', name: 'X-API-KEY'}, 'apiKeyAuth')
  .addServer(`${SWAGGER_SERVER}/${API_CONTEXT}`, `${NODE_ENV.toUpperCase() || 'LOCAL'} SERVER`)

export default swaggerOptions
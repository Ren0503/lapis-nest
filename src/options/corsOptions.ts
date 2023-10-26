import configuration from "config"
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface"

const { NODE_ENV, HOST_URL } = configuration()

export const corOptions: CorsOptions = {
  origin: NODE_ENV === 'production' ? HOST_URL : '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['X-API-KEY', 'Content-Type', 'Referer', 'Authorization'],
  optionsSuccessStatus: 200,
}
import { HelmetOptions } from "helmet";

export const helmetOptions: HelmetOptions = {
  frameguard: false,
  referrerPolicy: { policy: ['origin', 'unsafe-url']},
  crossOriginEmbedderPolicy: true,
  crossOriginOpenerPolicy: true,
  crossOriginResourcePolicy: true,
  hsts: {
    maxAge: 31536000,
    preload: true,
  },
  noSniff: true,
  originAgentCluster: true,
  dnsPrefetchControl: { allow: false },
  ieNoOpen: true,
  permittedCrossDomainPolicies: true,
  hidePoweredBy: true,
  xssFilter: true,
}
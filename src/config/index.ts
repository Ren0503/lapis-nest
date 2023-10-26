export interface IEnvironment {
  PORT: number
  NODE_ENV: string
  HOST_URL: string

  SWAGGER_SERVER: string
  API_CONTEXT: string

  PRIVATE_KEY: string
  PUBLIC_KEY: string
}

const configuration = (() => {
  let config: IEnvironment
  return () => {
    if (!config) {
      config = {
        PORT: parseInt(process.env.PORT),
        NODE_ENV: process.env.NODE_ENV || 'development',
        HOST_URL: process.env.HOST_URL || '',
      
        SWAGGER_SERVER: process.env.SWAGGER_SERVER || '',
        API_CONTEXT: process.env.API_CONTEXT || '',

        PRIVATE_KEY: process.env.PRIVATE_KEY || '',
        PUBLIC_KEY: process.env.PUBLIC_KEY || '',
      }
    }
    return config
  }
})()

export default configuration
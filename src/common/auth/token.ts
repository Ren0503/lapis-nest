import configuration from "config";
import { sign, verify } from "jsonwebtoken";

const { PRIVATE_KEY, PUBLIC_KEY } = configuration()

const privateKey = Buffer.from(PRIVATE_KEY, 'base64').toString('ascii')
const publicKey = Buffer.from(PUBLIC_KEY, 'base64').toString('ascii')

export function generateToken(userId: string, expiresIn: number | string) {
  try {
    const payload = {
      sub: userId
    }
    const token = sign(payload, privateKey, { 
      algorithm: 'RS256', 
      expiresIn 
    })
  
    return token
  } catch (error) {
    throw new Error(error)
  }
}

export function verifyToken(token: string) {
  try {
    const decode = verify(token, publicKey, {
      algorithms: ['RS256']
    })

    return decode
  } catch (error) {
    throw new Error(error)
  }
}
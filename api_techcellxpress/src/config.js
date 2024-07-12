//
import dotenv from 'dotenv';

dotenv.config();

export const {
  PROTOCOL = process.env.PROTOCOL || 'http://',
  DOMAIN = process.env.DOMAIN || 'localhost:',
  PORT = process.env.PORT || 3010,
  ORIGIN = process.env.ORIGIN || ['http://localhost:3000', `http://localhost:${PORT}`],
  METHODS = process.env.METHODS || ['GET', 'POST', 'PUT', 'DELETE'],
  SECRET_JWT_KEY = process.env.SECRET_JWT_KEY || "3$t0EsUnC0d1guBonoS3cr3t0_p@r@-t0d0L4@p",
  POSTGRES_VERCEL_URL = process.env.POSTGRES_VERCEL_URL
} = process.env;
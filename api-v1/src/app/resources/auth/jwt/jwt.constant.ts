import * as dotenv from 'dotenv';

dotenv.config();
export const JwTConstant = {
    secretKey: process.env.JWT_SECRET_KEY || 'secretKey',
    expiresIn: process.env.expiresIn      || '1d'
}
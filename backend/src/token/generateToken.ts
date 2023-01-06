import { tokenInterface } from '../interfaces/tokenInterface'
import jwt from 'jsonwebtoken'
import 'dotenv/config';

export default class GenerateToken {
  private userData: tokenInterface;

  constructor(data: tokenInterface) {
    this.userData = data;
  }

  generate() {
    const secret: string = process.env.JWT_SECRET || 'meusegredoguardado'
    const jwtConfig: any = {
      algorithm: 'HS256' 
    }

    const token = jwt.sign({ data: this.userData  },
      secret, jwtConfig);
     return token;
  }
}
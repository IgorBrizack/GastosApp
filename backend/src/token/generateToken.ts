import jwt from 'jsonwebtoken'
import 'dotenv/config'

export default class GenerateToken {
  public generate = (userData: any): string => {
    const { email, role } = userData
    const secret: string = process.env.JWT_SECRET ?? 'meusegredoguardado'
    const jwtConfig: any = {
      algorithm: 'HS256'
    }

    const token = jwt.sign({ data: { email, role } },
      secret, jwtConfig)
    return token
  }
}

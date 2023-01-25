import { NextFunction, Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

export const validateJWT = (req: Request, res: Response, next: NextFunction): any => {
  const { headers: { authorization } } = req

  if (!authorization) {
    return res.status(401).json({
      message: 'Token not found'
    })
  }

  try {
    jwt.verify(authorization, process.env.JWT_SECRET as string)
    next(); return
  } catch (error) {
    return res.status(403).json({ message: 'Invalid Jwt' })
  }
}

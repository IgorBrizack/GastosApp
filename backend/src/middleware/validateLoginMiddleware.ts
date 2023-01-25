import { NextFunction, Request, Response } from 'express'
import { loginSchema } from '../joi/schemas'

export const loginValidation = (req: Request, res: Response, next: NextFunction): any => {
  const { body: { email, password } } = req

  const { error } = loginSchema.validate({ email, password })
  if (error) return res.status(400).json({ message: error.message })

  next()
}

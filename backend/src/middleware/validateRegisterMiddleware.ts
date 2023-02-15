import { NextFunction, Request, Response } from 'express'
import { registerSchema } from '../joi/schemas'

export const registerValidation = (req: Request, res: Response, next: NextFunction): any => {
  const { body: { email, password, username, role } } = req

  const { error } = registerSchema.validate({ email, password, username, role })
  if (error) return res.status(400).json({ message: error.message })

  next()
}

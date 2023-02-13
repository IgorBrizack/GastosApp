import { NextFunction, Request, Response } from 'express'
import { userUpdateSchema } from '../joi/schemas'

export const userUpdateValidation = (req: Request, res: Response, next: NextFunction): any => {
  const { body: { email, username, role } } = req

  const { error } = userUpdateSchema.validate({ email, username, role })
  if (error) return res.status(400).json({ message: error.message })

  next()
}

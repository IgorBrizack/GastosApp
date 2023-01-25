import { NextFunction, Request, Response } from 'express'
import { gastoSchema } from '../joi/schemas'

export const gastoValidation = (req: Request, res: Response, next: NextFunction): any => {
  const { body: { email, type, value, date } } = req

  const { error } = gastoSchema.validate({ email, type, value, date })
  if (error) return res.status(400).json({ message: error.message })

  next()
}

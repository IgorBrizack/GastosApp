import { NextFunction, Request, Response } from 'express'
import { gastoUpdateSchema } from '../joi/schemas'

export const gastoUpdateValidation = (req: Request, res: Response, next: NextFunction): any => {
  const { body: { type, value, date } } = req

  const { error } = gastoUpdateSchema.validate({ type, value, date })
  if (error) return res.status(400).json({ message: error.message })

  next()
}

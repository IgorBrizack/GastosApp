import { NextFunction, Request, Response } from "express";

const { gastoSchema } = require('../joi/schemas')

export const gastoValidation = (req:Request, res:Response, next:NextFunction) => {
  const { body: { email, type, value, date } } = req;

  const { error } = gastoSchema.validate({ email, type, value, date });
    if (error) return res.status(400).json({ message: error.message });
   
    next();
};

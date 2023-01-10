import { NextFunction, Request, Response } from "express";

const { gastoSchema } = require('../joi/schemas')

export const gastoValidation = (req:Request, res:Response, next:NextFunction) => {
  const { body: { email, type, value } } = req;

  const { error } = gastoSchema.validate({ email, type, value });
    if (error) return res.status(400).json({ message: error.message });
   
    next();
};
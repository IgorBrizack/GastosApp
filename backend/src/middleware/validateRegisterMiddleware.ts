import { NextFunction, Request, Response } from "express";

const { registerSchema } = require('../joi/schemas')

export const registerValidation = (req:Request, res:Response, next:NextFunction) => {
  const { body: { email, password, username, role } } = req;

  const { error } = registerSchema.validate({ email, password, username, role });
    if (error) return res.status(400).json({ message: error.message });
   
    next();
};
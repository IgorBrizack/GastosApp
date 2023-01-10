import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');
require('dotenv').config();

export const validateJWT = (req:Request, res: Response, next:NextFunction) => {
  const { headers: { authorization } } = req;

  try {
    jwt.verify(authorization, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid Jwt' });
  }
};

import { ErrorRequestHandler, Response } from "express";

const error: ErrorRequestHandler = (err, _req, res: Response , _next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({message: err.message})
  }
  return res.status(500).json({ message: `Internal server error: ${err.message}` });
}


export default error;
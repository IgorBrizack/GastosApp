import { Request, Response } from "express";
import GastosService from "../service/gastosService";

export default class GastoController {
  constructor(private gastoService = new GastosService()) {}

  public insert = async (req: Request, res: Response) => {
    const { email, type, value }= req.body;
    await this.gastoService.insertGasto({email, type, value})
    res.status(201).json({message: 'inserido'})
  }
}
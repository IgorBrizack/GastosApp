import { Request, Response } from "express";
import GastosService from "../service/gastosService";

export default class GastoController {
  constructor(private gastoService = new GastosService()) {}

  public insert = async (req: Request, res: Response) => {
    const { email, type, value, date }= req.body;
    await this.gastoService.insertGasto({email, type, value, date});
    res.status(201).json({message: 'inserido'});
  }

  public getGastosUser = async (req: Request, res: Response) => {
    const { email } = req.params;
    try {
      const gastos = await this.gastoService.getAllGastosFromUser(email);
      return res.status(200).json(gastos);
    } catch (error) {
      return res.status(400).json({message: 'Not found'})
    }
  }

  public getGastosUserList = async (req: Request, res:Response) => {
    const { email } = req.params;
    try {
      const gastos = await this.gastoService.getGastoListFromUser(email)
      return res.status(200).json(gastos)
    } catch (error) {
      return res.status(400).json({message: 'Not found'})
    }
  }

  public updateGasto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    await this.gastoService.update(id, body)

    return res.status(201).json({message: 'Updated'})
  }

  public deleteGasto = async (req: Request, res: Response) => {
    const { id } = req.params;

    await this.gastoService.delete(id)

    return res.status(201).json({message: 'Deleted'})
  }

  public getAllGastos = async (req: Request, res: Response) => {
    const allGasto = await this.gastoService.allGasto()

    return res.status(201).json(allGasto)
  }
}
import { Request, Response } from "express";
import UserService from "../service/userService";

import * as bcrypt from 'bcryptjs';
const saltRounds = 10;

export default class UserController {
  constructor(private userService = new UserService()) {}

  public login = async (req: Request, res: Response) => {
    const { email, password }= req.body;
    const userData = await this.userService.loginService(email, password)
    res.status(201).json({token: userData})
  }

  public register = async (req: Request, res: Response) => {
    const { username, email, password, role } = req.body;

    const passwordCryptography = await bcrypt.hash(password, saltRounds);

    await this.userService.registerService({username, email, passwordCryptography, role});

    return res.status(201).json({message: "Created"})
  }
}
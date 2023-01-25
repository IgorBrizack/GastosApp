import { Request, Response } from 'express'
import UserService from '../service/userService'
import * as bcrypt from 'bcryptjs'
import GastosService from '../service/gastosService'
import { gastosDefault } from '../helpers/gastosDefault'
import gastoInterface from '../interfaces/gastoInterface'
const saltRounds = 10

export default class UserController {
  constructor (
    private readonly userService = new UserService(),
    private readonly gastosService = new GastosService()) {}

  public login = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body
    const userData = await this.userService.loginService(email, password)
    res.status(201).json(userData)
  }

  public register = async (req: Request, res: Response): Promise<any> => {
    const { username, email, password, role } = req.body

    const passwordCryptography = await bcrypt.hash(password, saltRounds)

    await this.userService.registerService({ username, email, passwordCryptography, role })

    const defaultValues: gastoInterface[] = gastosDefault(email)

    const values = defaultValues.map(async (el) => await this.gastosService.insertGasto(el))

    await Promise.all(values)

    return res.status(201).json({ message: 'Created' })
  }
}

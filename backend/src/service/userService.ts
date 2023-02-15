import { User } from '../database/models/User'
import ErrorWithStatus from '../helpers/ErrorWithStatus'
import IUser from '../interfaces/IUser'
import * as bcrypt from 'bcryptjs'
import GenerateToken from '../token/generateToken'
import loginReturnInterface from '../interfaces/loginReturnInterface'
import userUpdateInterface from '../interfaces/updateUserInterface'

export default class UserService {
  constructor (private readonly generateToken = new GenerateToken()) {}

  public loginService = async (email: string, password: string): Promise<loginReturnInterface | undefined> => {
    const userData: any = await User.findOne({ where: { email } })

    if (!userData) throw new ErrorWithStatus('User not found', 400)

    if (userData && await bcrypt.compare(password, userData.password)) {
      const { email, role, username } = userData
      const token = this.generateToken.generate({ email, role })
      return { token, email, role, username }
    }

    if (!userData) throw new ErrorWithStatus('User not found', 400)
  }

  public registerService = async (user: IUser): Promise<void> => {
    const { username, email, passwordCryptography, role } = user

    const hasUser = await this.getByEmail(email)

    if (!hasUser) {
      await User.create({ username, email, password: passwordCryptography, role })
      return
    }

    throw new ErrorWithStatus('User already registered!', 409)
  }

  public getByEmail = async (email: string): Promise<boolean> => {
    const [userByEmail] = await User.findAll({ where: { email } })
    if (userByEmail) return true
    return false
  }

  public usersList = async (): Promise<any> => {
    const usersList = await User.findAll({
      attributes: { exclude: ['password'] }
    })

    return usersList
  }

  public delete = async (email: string): Promise<void> => {
    await User.destroy({ where: { email } })
  }

  public update = async (id: number, body: userUpdateInterface): Promise<void> => {
    const { username, role, email } = body
    await User.update({ username, role, email }, { where: { id } })
  }
}

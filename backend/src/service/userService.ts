import { User } from "../database/models/User";
import ErrorWithStatus from "../helpers/ErrorWithStatus";
import IUser from "../interfaces/IUser";
import * as bcrypt from 'bcryptjs';
import GenerateToken from "../token/generateToken";

export default class UserService {
  constructor(private generateToken = new GenerateToken()) {}

  public loginService = async (email: string, password: string) => {
    const userData: any = await User.findOne({ where: { email } })

    if(!userData) throw new ErrorWithStatus('User not found', 400)

    if (userData && await bcrypt.compare(password, userData.password)) {
      const { email, role } = userData 
      const token = this.generateToken.generate({email, role});
      return token;
    } 

    if(!userData) throw new ErrorWithStatus('User not found', 400)
  }

  public registerService = async (user: IUser): Promise<any> => {
    const { username, email, passwordCryptography, role } = user;

    const hasUser = await this.getByEmail(email);

    if (!hasUser) {
      await User.create({ username, email,passwordCryptography, role });
    }

    throw new ErrorWithStatus('User already registered!', 409)
  }

  public getByEmail = async (email: string): Promise<boolean> => {
    const [userByEmail] = await User.findAll({ where: { email } });
    if (userByEmail) return true;
    return false;
  }
}
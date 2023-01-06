import { User } from "../database/models/User";
import { userInterface } from "../interfaces/userInterface";

export default class UserService {

  public login(email: string, password: string) {
    const userData: any = User.findOne({ where: { email } })

    if (!userData) throw new Error('User not found');
    
    if (userData && userData.password === password) 

    throw new Error('Invalid fields');
  }


}
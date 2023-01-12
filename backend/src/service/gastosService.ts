import gastoInterface from "../interfaces/gastoInterface";
import { User } from "../database/models/User";
import { Gasto } from "../database/models/Gasto";

export default class GastosService {

  public insertGasto = async (data: gastoInterface) => {
    const { email, type, value, date  } = data
    const userData: any = await User.findOne({ where: { email } })
    const { id } = userData ;

    Gasto.create({userId: Number(id), type, value, gastoDate: date})
  }

  public getAllGastosFromUser = async (email: string) => {
    const userData: any = await User.findOne({ where: { email } })
    const { id } = userData ;

    return  await Gasto.findAll({where: { userId: id }})
  }
}
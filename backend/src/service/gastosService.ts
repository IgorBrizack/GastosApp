import gastoInterface from "../interfaces/gastoInterface";
import { User } from "../database/models/User";
import { Gasto } from "../database/models/Gasto";
import Sequelize from "../database/models/index"

export default class GastosService {

  public insertGasto = async (data: gastoInterface) => {
    const { email, type, value, date  } = data
    const userData: any = await User.findOne({ where: { email } })
    const { id } = userData ;

    await Gasto.create({userId: Number(id), type, value, gastoDate: date})
  }

  public getAllGastosFromUser = async (email: string) => {
    const userData: any = await User.findOne({ where: { email } })
    const { id } = userData ;

    const QUERY = `SELECT user_id,type, SUM(value) as value FROM gastos_app_db.gastos
    WHERE (user_id = ${id}) 
    AND (type = 'alimentacao' OR type = 'servico' OR type = 'investimento' OR type = 'lazer' OR type = 'educacao')
    GROUP BY user_id, type`;

    const [result] = await Sequelize.query(QUERY)
    return result
  }
}
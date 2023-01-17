import gastoInterface from "../interfaces/gastoInterface";
import { User } from "../database/models/User";
import { Gasto } from "../database/models/Gasto";
import Sequelize from "../database/models/index"
import IGastoUpdate from "../interfaces/IGastoUpdate";

export default class GastosService {

  public getUserId = async (email: string): Promise<Number> => {
    const userData: any = await User.findOne({ where: { email } })
    const { id } = userData
    return id
  }

  public insertGasto = async (data: gastoInterface) => {
    const { email, type, value, date  } = data
    const id = await this.getUserId(email)

    await Gasto.create({userId: Number(id), type, value, gastoDate: date})
  }

  public getAllGastosFromUser = async (email: string) => {
    const id = await this.getUserId(email)

    const QUERY = `SELECT user_id, type, SUM(value) as value FROM gastos_app_db.gastos
    WHERE (user_id = ${id}) 
    AND (type = 'alimentacao' OR type = 'servico' OR type = 'investimento' OR type = 'lazer' OR type = 'educacao')
    GROUP BY user_id, type`;

    const [result] = await Sequelize.query(QUERY)
    return result
  }

  public getGastoListFromUser = async(email: string) => {
    const id = await this.getUserId(email)

    const result = await Gasto.findAll({where: {user_id: id}})

    return result
  }

  public update = async (id: string, body: IGastoUpdate) => {
    const { value, type, date } = body
    const update = await Gasto.update({value, type, gastoDate: date}, {where: { id} })
    console.log(update)
    return update
  }
}
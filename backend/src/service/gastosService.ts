import gastoInterface from '../interfaces/gastoInterface'
import { User } from '../database/models/User'
import { Gasto } from '../database/models/Gasto'
import Sequelize from '../database/models/index'
import IGastoUpdate from '../interfaces/IGastoUpdate'
import gastoUser from '../interfaces/gastoUser'
import allGastoInterface from '../interfaces/allGastoInterface'
import gastoFromUser from '../interfaces/gastoFromUser'

export default class GastosService {
  public getUserId = async (email: string): Promise<number> => {
    const userData: any = await User.findOne({ where: { email } })
    const { id } = userData
    return id
  }

  public insertGasto = async (data: gastoInterface): Promise<any> => {
    const { email, type, value, date } = data
    const id = await this.getUserId(email)

    await Gasto.create({ userId: Number(id), type, value, gastoDate: date })
  }

  public getAllGastosFromUser = async (email: string): Promise<gastoFromUser | any> => {
    const id = await this.getUserId(email)

    const QUERY = `SELECT user_id, type, SUM(value) as value FROM gastos_app_db.gastos
    WHERE (user_id = ${id}) 
    AND (type = 'alimentacao' OR type = 'servico' OR type = 'investimento' OR type = 'lazer' OR type = 'educacao')
    GROUP BY user_id, type`

    const [result] = await Sequelize.query(QUERY)
    return result
  }

  public getGastoListFromUser = async (email: string): Promise<gastoUser[] | any> => {
    const id = await this.getUserId(email)

    const result = await Gasto.findAll({ where: { user_id: id } })

    return result
  }

  public update = async (id: string, body: IGastoUpdate): Promise<void> => {
    const { value, type, date } = body
    await Gasto.update({ value, type, gastoDate: date }, { where: { id } })
  }

  public delete = async (id: string): Promise<void> => {
    await Gasto.destroy({ where: { id } })
  }

  public allGasto = async (): Promise<allGastoInterface[] | any> => {
    const QUERY = `SELECT type, SUM(value) as value FROM gastos_app_db.gastos
    GROUP BY type`

    const [result] = await Sequelize.query(QUERY)
    return result
  }

  public allGastoWithDate = async (): Promise<gastoUser[] | any> => {
    const result = Gasto.findAll()

    return await result
  }
}

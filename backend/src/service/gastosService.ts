import ErrorWithStatus from "../helpers/ErrorWithStatus";
import IUser from "../interfaces/IUser";
import * as bcrypt from 'bcryptjs';
import GenerateToken from "../token/generateToken";

enum gastosType {
  alimentacao,
  servico,
  investimento,
  lazer,
  educacao
}

export default class GastosService {

  public insertGasto = async ()  => {

  }
}
enum gastosType {
  alimentacao,
  servico,
  investimento,
  lazer,
  educacao
}

export default interface gastoInterface {
  email: string,
  value: number,
  type: gastosType
}
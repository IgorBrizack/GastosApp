export enum gastosType {
  alimentacao = 'alimentacao',
  servico = 'servico',
  investimento = 'investimento',
  lazer = 'lazer',
  educacao = 'educacao'
}

export default interface gastoInterface {
  email: string,
  value: number,
  type: gastosType,
  date: string
}
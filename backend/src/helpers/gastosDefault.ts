import gastoInterface from "../interfaces/gastoInterface";
import { gastosType } from "../interfaces/gastoInterface"; 

export const gastosDefault = (email: string): gastoInterface[] => {
  const defaultValues: gastoInterface[] = [
    {
    type: gastosType.alimentacao,
    email: email,
    value: 0,
    date: '0000/00/00'
    },
    {
      type: gastosType.educacao,
      email: email,
      value: 0,
      date: '0000/00/00'
    },
    {
      type: gastosType.investimento,
      email: email,
      value: 0,
      date: '0000/00/00'
    },
    {
      type: gastosType.lazer,
      email: email,
      value: 0,
      date: '0000/00/00'
    },
    {
      type: gastosType.servico,
      email: email,
      value: 0,
      date: '0000/00/00'
    }
  ]

  return defaultValues
}

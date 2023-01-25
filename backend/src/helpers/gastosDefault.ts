import gastoInterface, { gastosType } from '../interfaces/gastoInterface'

export const gastosDefault = (email: string): gastoInterface[] => {
  const defaultValues: gastoInterface[] = [
    {
      type: gastosType.alimentacao,
      email,
      value: 0,
      date: '0000/00/00'
    },
    {
      type: gastosType.educacao,
      email,
      value: 0,
      date: '0000/00/00'
    },
    {
      type: gastosType.investimento,
      email,
      value: 0,
      date: '0000/00/00'
    },
    {
      type: gastosType.lazer,
      email,
      value: 0,
      date: '0000/00/00'
    },
    {
      type: gastosType.servico,
      email,
      value: 0,
      date: '0000/00/00'
    }
  ]

  return defaultValues
}

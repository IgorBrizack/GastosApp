import { gastosType } from './gastoInterface'

export default interface gastoUser {
  id: number
  userId: number
  type: gastosType
  value: string
  gastoDate: string
}

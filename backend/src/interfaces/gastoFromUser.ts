import { gastosType } from './gastoInterface'

export default interface gastoFromUser {
  user_id: number
  type: gastosType
  value: string
}

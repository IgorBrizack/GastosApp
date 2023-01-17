import { gastosType } from "./gastoInterface";

export default interface IGastoUpdate {
  type: gastosType,
  value: number,
  date: string
}
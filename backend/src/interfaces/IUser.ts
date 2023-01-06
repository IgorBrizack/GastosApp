export default interface IUser {
  id?: number
  username: string;
  email: string;
  passwordCryptography: string | number;
  role: string;
}
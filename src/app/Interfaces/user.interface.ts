import { CardSave } from './cardSave.interface';
export interface User{
  id?:number,
  nombre:string,
  correo:string,
  uuid?:string,
  dinero:number,
  cartas:CardSave[]
}

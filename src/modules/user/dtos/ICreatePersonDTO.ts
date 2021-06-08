import ICreateUserAdressDTO from './ICreateUserAdressDTO';

export default interface ICreatePersonDTO {
  cpf:string;
  email:string;
  cellphone:string;
  first_name:string;
  last_name: string;
  birth_date: Date;
  userAddress: ICreateUserAdressDTO;
}
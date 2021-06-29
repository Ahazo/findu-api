import ICreateUserAddressDTO from './ICreateUserAddressDTO';

export default interface ICreatePersonDTO {
  cpf:string;
  email:string;
  cellphone:string;
  first_name:string;
  last_name: string;
  birth_date: Date;
  userAddress: ICreateUserAddressDTO;
}
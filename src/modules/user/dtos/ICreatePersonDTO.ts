import { EStatus } from "../../../shared/utils/dtos/EStatus";

import ICreateAddressDTO from './ICreateAddressDTO';

export default interface ICreatePersonDTO {
  address: ICreateAddressDTO;
  cpf: string;
  email: string;
  cellphone_number: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  status: EStatus;
}

import ICreateEstablishmentAdressDTO from "./ICreateEstablishmentAdressDTO";

import { EStatus } from '../../../shared/utils/dtos/EStatus';

export default interface ICreateEstablishmentDTO {
  establishment_name: string;
  landline?: string;
  establishment_cnpj?: string;
  establishment_address: ICreateEstablishmentAdressDTO;
  status: EStatus;
  followers_count: number;
  experience: number;
}
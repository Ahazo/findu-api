import { EStatus } from '../../../shared/utils/dtos/EStatus';

import ICreateBrand from "modules/brand/dtos/ICreateBrandDTO";
import ICreateEstablishmentAdressDTO from "./ICreateEstablishmentAdressDTO";

export default interface ICreateEstablishmentDTO {
  establishment_name: string;
  establishment_cnpj?: string;
  establishment_address: ICreateEstablishmentAdressDTO;
  brand: ICreateBrand;
  status: EStatus;
  followers_count: number;
  experience: number;
}
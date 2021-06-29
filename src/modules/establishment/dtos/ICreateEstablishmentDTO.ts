import { EStatus } from '../../../shared/utils/dtos/EStatus';

import ICreateBrand from "modules/brand/dtos/ICreateBrandDTO";
import ICreateEstablishmentAddressDTO from "./ICreateEstablishmentAddressDTO";
import ICreateEstablishmentLandlineDTO from './ICreateEstablishmentLandlineDTO';

export default interface ICreateEstablishmentDTO {
  establishment_name: string;
  establishment_cnpj?: string;
  establishment_address: ICreateEstablishmentAddressDTO;
  establishment_landline?: ICreateEstablishmentLandlineDTO;
  brand: ICreateBrand;
  status: EStatus;
  followers_count: number;
  experience: number;
}
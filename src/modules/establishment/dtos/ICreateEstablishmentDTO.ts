import ICreateEstablishmentAdressDTO from "./ICreateEstablishmentAdressDTO";
import ICreateCorporationDTO from "../../corporation/dtos/ICreateCorporationDTO";

import { EStatus } from '../../../shared/utils/dtos/EStatus';

export default interface ICreateEstablishmentDTO {
  stablishment_name: string;
  landline: string;
  establishment_cnpj: string;
  stablishment_address: ICreateEstablishmentAdressDTO;
  corporation: ICreateCorporationDTO; 
  status: EStatus;
  followers_count: number;
  campaigns_count: number;
  experience: number;
}
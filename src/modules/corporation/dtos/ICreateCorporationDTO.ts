import { EStatus } from "shared/utils/dtos/EStatus";

export default interface ICreateCorporationDTO {
  company_name: string;
  cnpj: string;
  username: string;
  password: string;
  email: string;
  status: EStatus;
}
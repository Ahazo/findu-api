import ICreateCorporationDTO from "modules/corporation/dtos/ICreateCorporationDTO";
import { EStatus } from "shared/utils/dtos/EStatus";

export default interface ICreateBrand {
  brandName: string;
  department: string;
  corporation?: ICreateCorporationDTO;
  status: EStatus;
}

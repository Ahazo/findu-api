import { EStatus } from "shared/utils/dtos/EStatus";

import ICreateDepartment from "./ICreateDepartmentDTO";
import ICreateCorporationDTO from "modules/corporation/dtos/ICreateCorporationDTO";

export default interface ICreateBrandDTO {
  brand_name: string;
  department: ICreateDepartment;
  corporation?: ICreateCorporationDTO;
  status: EStatus;
}
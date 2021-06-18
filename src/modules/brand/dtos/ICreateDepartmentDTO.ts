import { EStatus } from "shared/utils/dtos/EStatus";

export default interface ICreateDepartmentDTO {
  department_name: string;
  status: EStatus;
}

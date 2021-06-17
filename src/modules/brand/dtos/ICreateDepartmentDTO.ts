import { EStatus } from "shared/utils/dtos/EStatus";

export default interface ICreateBrand {
  department_name: string;
  status: EStatus;
}

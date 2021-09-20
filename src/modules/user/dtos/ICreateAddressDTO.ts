import { EStatus } from "../../../shared/utils/dtos/EStatus";

export default interface ICreateAddressDTO {
  postal_code: string;
  street: string;
  house_number: number;
  complement: string;
  city: string;
  state: string;
  status: EStatus;
};

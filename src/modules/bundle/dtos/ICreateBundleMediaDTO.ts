import { EStatus } from "../../../shared/utils/dtos/EStatus";
import { ICreateBundleDTO } from "./ICreateBundleDTO";

export default interface ICreateBundleMediasDTO {
  bundle: ICreateBundleDTO;
  url: string;
  status: EStatus;
}

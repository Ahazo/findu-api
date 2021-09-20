import { EStatus } from "../../../shared/utils/dtos/EStatus";
import ICreateAreaDTO from "./ICreateAreaDTO";

export default interface ICreateSpecializationDTO {
	area: ICreateAreaDTO;
	description: string;
	status: EStatus;
}

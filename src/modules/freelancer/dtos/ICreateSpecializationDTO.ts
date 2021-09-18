import { EStatus } from "shared/utils/dtos/EStatus";
import ICreateAreaType from "./ICreateAreaDTO";

export default interface ICreateSpecializationDTO {
	area: ICreateAreaType;
	description: string;
	status: EStatus;
}

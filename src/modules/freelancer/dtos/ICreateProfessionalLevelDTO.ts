import { EStatus } from "../../../shared/utils/dtos/EStatus";

export default interface ICreateProfessionalLevelDTO {
	description: string;
	experience_needed: number;
	status: EStatus;
}

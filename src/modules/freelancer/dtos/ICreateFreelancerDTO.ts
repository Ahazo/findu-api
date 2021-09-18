import ICreateUserDTO from "modules/user/dtos/ICreateUserDTO";
import ICreateProfessionalLevelDTO from "./ICreateProfessionalLevelDTO";

export default interface ICreateFreelancerDTO {
	user: ICreateUserDTO;
	level: ICreateProfessionalLevelDTO;
	experience: number;
	projects_counter: number;
	open_to_work: boolean;
}

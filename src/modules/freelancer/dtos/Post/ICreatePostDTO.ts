import { EStatus } from "../../../../shared/utils/dtos/EStatus";
import ICreateFreelancerDTO from "../ICreateFreelancerDTO";

export default interface ICreatePostDTO {
	freelancer: ICreateFreelancerDTO;
	content: string;
	status: EStatus;
}

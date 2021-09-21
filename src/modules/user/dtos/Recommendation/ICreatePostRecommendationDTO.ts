import ICreateFreelancerDTO from "modules/freelancer/dtos/ICreateFreelancerDTO";
import ICreateOrderDTO from "modules/order/dtos/ICreateOrderDTO";
import { EStatus } from "shared/utils/dtos/EStatus";
import ICreateUserDTO from "../ICreateUserDTO";

export default interface ICreatePostRecommendationDTO {
	user: ICreateUserDTO;
	freelancer: ICreateFreelancerDTO;
	order: ICreateOrderDTO;
	content: string;
	status: EStatus;
}

import ICreateFreelancerDTO from "modules/freelancer/dtos/ICreateFreelancerDTO";
import ICreateOrderDTO from "./ICreateOrderDTO";

export default interface ICreateOrderLineDTO {
	order: ICreateOrderDTO;
	freelancer: ICreateFreelancerDTO;
	total_value: number;
}

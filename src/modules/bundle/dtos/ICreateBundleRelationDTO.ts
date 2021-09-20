import ICreateFreelancerDTO from "../../freelancer/dtos/ICreateFreelancerDTO";
import { ICreateBundleDTO } from "./ICreateBundleDTO";

export default interface ICreateBundleRelationDTO {
	bundle: ICreateBundleDTO;
	freelancer: ICreateFreelancerDTO;
	percentage: number;
}

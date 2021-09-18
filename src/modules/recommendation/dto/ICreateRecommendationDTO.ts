import ICreateFreelancerDTO from "modules/freelancer/dtos/ICreateFreelancerDTO";
import ICreateUserDTO from "modules/user/dtos/ICreateUserDTO";

export default interface ICreateRecommendationDTO {
	user: ICreateUserDTO;
	freelancer: ICreateFreelancerDTO;
	influencer_reffered: ICreateUserDTO;
}

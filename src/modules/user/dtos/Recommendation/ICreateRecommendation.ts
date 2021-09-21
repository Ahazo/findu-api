import { EStatus } from "shared/utils/dtos/EStatus";
import ICreatePostRecommendationDTO from "./ICreatePostRecommendationDTO";
import ICreateUserDTO from "../ICreateUserDTO";

export default interface ICreateRecommendationDTO {
	post: ICreatePostRecommendationDTO;
	user: ICreateUserDTO;
	status: EStatus;
}

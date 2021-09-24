import { EStatus } from 'shared/utils/dtos/EStatus';

import ICreateUserDTO from '../ICreateUserDTO';
import ICreatePostRecommendationDTO from './ICreatePostRecommendationDTO';

export default interface ICreateRecommendationDTO {
	post: ICreatePostRecommendationDTO;
	user: ICreateUserDTO;
	status: EStatus;
}

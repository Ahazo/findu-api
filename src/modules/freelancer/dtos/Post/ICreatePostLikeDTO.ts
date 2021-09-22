import { EStatus } from '../../../../shared/utils/dtos/EStatus';
import ICreateUserDTO from '../../../user/dtos/ICreateUserDTO';
import ICreatePostDTO from './ICreatePostDTO';

export default interface ICreatePostLikeDTO {
	post: ICreatePostDTO;
	user: ICreateUserDTO;
	status: EStatus;
}

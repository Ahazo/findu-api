import { EStatus } from '../../../../shared/utils/dtos/EStatus';
import ICreateUserDTO from '../../../user/dtos/ICreateUserDTO';
import ICreatePostDTO from './ICreatePostDTO';

export default interface ICreatePostCommentDTO {
	post: ICreatePostDTO;
	user: ICreateUserDTO;
	content: string;
	status: EStatus;
}

import ICreatePostDTO from './ICreatePostDTO';
import ICreateUserDTO from '../../../user/dtos/ICreateUserDTO';
import { EStatus } from '../../../../shared/utils/dtos/EStatus';

export default interface ICreatePostCommentDTO {
	post: ICreatePostDTO;
	user: ICreateUserDTO;
	content: string;
	status: EStatus;
}

import { EStatus } from '../../../../shared/utils/dtos/EStatus';
import ICreatePostDTO from './ICreatePostDTO';

export default interface ICreatePostMediaDTO {
	post: ICreatePostDTO;
	url: string;
	status: EStatus;
}

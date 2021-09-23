import { EStatus } from '../../../shared/utils/dtos/EStatus';
import ICreateUserDTO from './ICreateUserDTO';

export default interface ICreateBannerPhotoDTO {
	user: ICreateUserDTO;
	url: string;
	status: EStatus;
}

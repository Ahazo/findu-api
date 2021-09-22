import { EStatus } from '../../../../shared/utils/dtos/EStatus';
import ICreateUserDTO from '../ICreateUserDTO';

export default interface ICreateFollow {
	user: ICreateUserDTO;
	followed: ICreateUserDTO;
	status: EStatus;
}

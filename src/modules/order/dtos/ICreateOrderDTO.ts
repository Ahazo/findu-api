import ICreateBundleDTO from 'modules/bundle/dtos/ICreateBundleDTO';
import ICreateUserDTO from 'modules/user/dtos/ICreateUserDTO';
import ICreateOrderStatusDTO from './ICreateOrderStatusDTO';

export default interface ICreateOrderDTO {
	user: ICreateUserDTO;
	bundle: ICreateBundleDTO;
	status: ICreateOrderStatusDTO;
}

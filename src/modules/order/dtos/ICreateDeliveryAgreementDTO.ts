import ICreateUserDTO from 'modules/user/dtos/ICreateUserDTO';

import ICreateOrderDTO from './ICreateOrderDTO';

export default interface ICreateDeliveryAgreementDTO {
	user: ICreateUserDTO;
	order: ICreateOrderDTO;
	status: 'accepted' | 'refused';
}

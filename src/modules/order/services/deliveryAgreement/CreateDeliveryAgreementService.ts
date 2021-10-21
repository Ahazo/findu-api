import { injectable, inject } from 'tsyringe';

import ICreateDeliveryAgreementDTO from '../../dtos/ICreateDeliveryAgreementDTO';
import DeliveryAgreement from '../../infra/typeorm/entities/DeliveryAgreement';
import IDeliveryAgreementRepository from '../../repositories/IDeliveryAgreementRepository';

@injectable()
export default class CreateDeliveryAgreementService {
	constructor(
		@inject('DeliveryAgreementRepository')
		private deliveryAgreementRepository: IDeliveryAgreementRepository
	) {}

	public async execute(
		data: ICreateDeliveryAgreementDTO
	): Promise<DeliveryAgreement> {
		const result = await this.deliveryAgreementRepository.create(data);
		return result;
	}
}

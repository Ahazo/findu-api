import { injectable, inject } from 'tsyringe';

import DeliveryAgreement from '../../infra/typeorm/entities/DeliveryAgreement';
import IDeliveryAgreementRepository from '../../repositories/IDeliveryAgreementRepository';

@injectable()
export default class FindDeliveryAgreement {
	constructor(
		@inject('DeliveryAgreementRepository')
		private deliveryAgreementRepository: IDeliveryAgreementRepository
	) {}

	public async executeById(id: string): Promise<DeliveryAgreement | undefined> {
		const result = await this.deliveryAgreementRepository.findById(id);
		return result;
	}
}

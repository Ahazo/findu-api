import DeliveryAgreement from 'modules/order/infra/typeorm/entities/DeliveryAgreement';
import { injectable, inject } from 'tsyringe';

import IDeliveryAgreementRepository from '../../repositories/IDeliveryAgreementRepository';

@injectable()
export default class UpdateDeliveryAgreementService {
	constructor(
		@inject('DeliveryAgreementRepository')
		private deliveryAgreementRepository: IDeliveryAgreementRepository
	) {}

	public async execute(data: DeliveryAgreement): Promise<DeliveryAgreement> {
		return this.deliveryAgreementRepository.save(data);
	}
}

import { getRepository, Repository, Any } from 'typeorm';

import ICreateDeliveryAgreementDTO from '../../../dtos/ICreateDeliveryAgreementDTO';
import IDeliveryAgreementRepository from '../../../repositories/IDeliveryAgreementRepository';
import DeliveryAgreement from '../entities/DeliveryAgreement';

export default class DeliveryAgreementRepository
	implements IDeliveryAgreementRepository
{
	private deliveryAgreementRepository: Repository<DeliveryAgreement>;

	constructor() {
		this.deliveryAgreementRepository = getRepository(DeliveryAgreement);
	}

	async create(data: ICreateDeliveryAgreementDTO): Promise<DeliveryAgreement> {
		const deliveryAgreement = await this.deliveryAgreementRepository.create(
			data
		);

		await this.deliveryAgreementRepository.save(deliveryAgreement);

		return deliveryAgreement;
	}

	async save(data: DeliveryAgreement): Promise<DeliveryAgreement> {
		return this.deliveryAgreementRepository.save(data);
	}

	async findById(id: number): Promise<DeliveryAgreement | undefined> {
		const deliveryAgreement = await this.deliveryAgreementRepository.findOne(
			id
		);

		return deliveryAgreement;
	}
}

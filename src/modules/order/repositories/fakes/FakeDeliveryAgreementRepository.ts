import ICreateDeliveryAgreementDTO from '../../dtos/ICreateDeliveryAgreementDTO';
import DeliveryAgreement from '../../infra/typeorm/entities/DeliveryAgreement';
import IDeliveryAgreementRepository from '../IDeliveryAgreementRepository';

export default class FakeDeliveryAgreementRepository
	implements IDeliveryAgreementRepository
{
	private deliveryAgreements: DeliveryAgreement[] = [];

	public async create(
		data: ICreateDeliveryAgreementDTO
	): Promise<DeliveryAgreement> {
		const delivery = new DeliveryAgreement();

		Object.assign(
			delivery,
			{ id: Math.floor(Math.random() * (100 - 1) + 1) },
			data
		);

		this.deliveryAgreements.push(delivery);
		return delivery;
	}

	public async save(data: DeliveryAgreement): Promise<DeliveryAgreement> {
		const findIndex = this.deliveryAgreements.findIndex(
			(findDelivery) => findDelivery.id === data.id
		);

		this.deliveryAgreements[findIndex] = data;

		return data;
	}

	public async findById(id: string): Promise<DeliveryAgreement | undefined> {
		const findDelivery = this.deliveryAgreements.find((find) => find.id === id);

		return findDelivery;
	}
}

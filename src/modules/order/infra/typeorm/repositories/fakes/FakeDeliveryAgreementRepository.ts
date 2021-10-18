import ICreateDeliveryAgreementDTO from '../../../../dtos/ICreateDeliveryAgreementDTO';
import IDeliveryAgreementRepository from '../../../../repositories/IDeliveryAgreementRepository';
import DeliveryAgreement from '../../entities/DeliveryAgreement';

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
			{ id: Math.floor(Math.random() * (10 - 1) + 1) },
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

	public async findById(id: number): Promise<DeliveryAgreement | undefined> {
		const findDelivery = await this.deliveryAgreements.find(
			(find) => find.id === id
		);

		return findDelivery;
	}
}
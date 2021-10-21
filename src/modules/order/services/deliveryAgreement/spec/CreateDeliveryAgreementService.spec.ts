import ICreateDeliveryAgreementDTO from '../../../dtos/ICreateDeliveryAgreementDTO';
import DeliveryAgreement from '../../../infra/typeorm/entities/DeliveryAgreement';
import FakeDeliveryAgreementRepository from '../../../repositories/fakes/FakeDeliveryAgreementRepository';
import CreateDeliveryAgreementService from '../CreateDeliveryAgreementService';

describe('CreateDeliveryAgreement', () => {
	let fakeDeliveryAgreementRepository: FakeDeliveryAgreementRepository;

	let deliveryAgreementService: CreateDeliveryAgreementService;

	beforeEach(() => {
		fakeDeliveryAgreementRepository = new FakeDeliveryAgreementRepository();

		deliveryAgreementService = new CreateDeliveryAgreementService(
			fakeDeliveryAgreementRepository
		);
	});

	it('should be able to create delivery agreements', async () => {
		expect(
			await deliveryAgreementService.execute({
				user_id: 1,
				order_id: 1,
				status: 'accepted',
			})
		).toBeInstanceOf(DeliveryAgreement);
	});
});

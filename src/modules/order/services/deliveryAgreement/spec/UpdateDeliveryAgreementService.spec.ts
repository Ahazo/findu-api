import ICreateDeliveryAgreementDTO from '../../../dtos/ICreateDeliveryAgreementDTO';
import FakeDeliveryAgreementRepository from '../../../repositories/fakes/FakeDeliveryAgreementRepository';
import CreateDeliveryAgreementService from '../CreateDeliveryAgreementService';
import UpdateDeliveryAgreementService from '../UpdateDeliveryAgreementService';

describe('UpdateDeliveryAgreement', () => {
	let fakeDeliveryAgreementRepository: FakeDeliveryAgreementRepository;

	let createDeliveryAgreementService: CreateDeliveryAgreementService;
	let updateDeliveryAgreementService: UpdateDeliveryAgreementService;

	beforeEach(() => {
		fakeDeliveryAgreementRepository = new FakeDeliveryAgreementRepository();

		createDeliveryAgreementService = new CreateDeliveryAgreementService(
			fakeDeliveryAgreementRepository
		);

		updateDeliveryAgreementService = new UpdateDeliveryAgreementService(
			fakeDeliveryAgreementRepository
		);
	});

	it('should be able to update delivery agreement', async () => {
		const deliveryAgr = await createDeliveryAgreementService.execute({
			user_id: 1,
			order_id: 1,
			status: 'accepted',
		});

		const update = await updateDeliveryAgreementService.execute({
			...deliveryAgr,
			id: deliveryAgr.id,
			status: 'refused',
		});

		expect(update.status).toEqual('refused');
	});
});

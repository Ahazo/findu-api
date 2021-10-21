import FakeDeliveryAgreementRepository from '../../../repositories/fakes/FakeDeliveryAgreementRepository';
import CreateDeliveryAgreementService from '../CreateDeliveryAgreementService';
import FindDeliveryAgreement from '../FindDeliveryAgreementService';

describe('FindDeliveryAgreement', () => {
	let fakeDeliveryAgreementRepository: FakeDeliveryAgreementRepository;

	let createDeliveryAgreementService: CreateDeliveryAgreementService;
	let findDeliveryAgreementService: FindDeliveryAgreement;

	beforeEach(() => {
		fakeDeliveryAgreementRepository = new FakeDeliveryAgreementRepository();

		createDeliveryAgreementService = new CreateDeliveryAgreementService(
			fakeDeliveryAgreementRepository
		);

		findDeliveryAgreementService = new FindDeliveryAgreement(
			fakeDeliveryAgreementRepository
		);
	});

	it('should be able to find delivery agreement by its ID', async () => {
		const deliveryAgr = await createDeliveryAgreementService.execute({
			user_id: 1,
			order_id: 1,
			status: 'accepted',
		});

		expect(await findDeliveryAgreementService.executeById(deliveryAgr.id)).toBe(
			deliveryAgr
		);
	});

	it('should not be able to find delivery agreement by its wrong ID', async () => {
		const deliveryAgreementData = await createDeliveryAgreementService.execute({
			user_id: 1,
			order_id: 1,
			status: 'accepted',
		});

		const deliveryAgreement = await createDeliveryAgreementService.execute(
			deliveryAgreementData
		);

		expect(
			await findDeliveryAgreementService.executeById(deliveryAgreement.id + 1)
		).toBeUndefined();
	});
});

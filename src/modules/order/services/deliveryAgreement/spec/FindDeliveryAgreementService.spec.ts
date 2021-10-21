import ICreateDeliveryAgreementDTO from '../../../dtos/ICreateDeliveryAgreementDTO';
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
		const deliveryAgrData: ICreateDeliveryAgreementDTO = {
			user_id: 1,
			order_id: 1,
			status: 'accepted',
		};

		const deliveryAgr = await createDeliveryAgreementService.execute(
			deliveryAgrData
		);

		const find = await findDeliveryAgreementService.executeById(deliveryAgr.id);

		expect(find).toBe(deliveryAgr);
	});

	it('should not be able to find delivery agreement by its wrong ID', async () => {
		const deliveryAgrData: ICreateDeliveryAgreementDTO = {
			user_id: 1,
			order_id: 1,
			status: 'accepted',
		};

		const deliveryAgr = await createDeliveryAgreementService.execute(
			deliveryAgrData
		);

		expect(
			await findDeliveryAgreementService.executeById(deliveryAgr.id + 1)
		).toBeUndefined();
	});
});

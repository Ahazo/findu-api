import { v4 as uuid } from 'uuid';

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
			user_id: uuid(),
			order_id: uuid(),
			received: true,
		});

		expect(await findDeliveryAgreementService.executeById(deliveryAgr.id)).toBe(
			deliveryAgr
		);
	});

	it('should not be able to find delivery agreement by its wrong ID', async () => {
		await createDeliveryAgreementService.execute({
			user_id: uuid(),
			order_id: uuid(),
			received: true,
		});

		const fakeDeliveryAgreementId = uuid();

		expect(
			await findDeliveryAgreementService.executeById(fakeDeliveryAgreementId)
		).toBeUndefined();
	});
});

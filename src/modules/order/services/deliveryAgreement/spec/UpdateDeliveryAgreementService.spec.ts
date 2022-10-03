import { v4 as uuid } from 'uuid';

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
			user_id: uuid(),
			order_id: uuid(),
			received: false,
		});

		const update = await updateDeliveryAgreementService.execute({
			...deliveryAgr,
			id: deliveryAgr.id,
			received: true,
		});

		expect(update.received).toBe(true);
	});
});

import FakeDeliveryAgreementRepository from 'modules/order/infra/typeorm/repositories/fakes/FakeDeliveryAgreementRepository';

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

	it('should be able to update delivery agreement', async () => {});
});

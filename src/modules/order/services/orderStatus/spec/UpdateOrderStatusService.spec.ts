import FakeOrderStatusRepository from '../../../repositories/fakes/FakeOrderStatusRepository';
import CreateOrderStatusService from '../CreateOrderStatusService';
import UpdateOrderStatusService from '../UpdateOrderStatusService';

describe('UpdateOrderStatus', () => {
	let fakeOrderStatusRepository: FakeOrderStatusRepository;

	let createOrderStatusService: CreateOrderStatusService;
	let updateOrderStatusService: UpdateOrderStatusService;

	beforeEach(() => {
		fakeOrderStatusRepository = new FakeOrderStatusRepository();

		createOrderStatusService = new CreateOrderStatusService(
			fakeOrderStatusRepository
		);
		updateOrderStatusService = new UpdateOrderStatusService(
			fakeOrderStatusRepository
		);
	});

	it('should be able to update Order Status', async () => {
		const orderStatus = await createOrderStatusService.execute({
			description: 'pending',
		});

		const update = await updateOrderStatusService.execute({
			...orderStatus,
			id: orderStatus.id,
			description: 'pending payment',
		});

		expect(update.description).toEqual('pending payment');
	});
});

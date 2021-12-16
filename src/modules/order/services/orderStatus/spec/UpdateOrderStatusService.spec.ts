import ICreateOrderStatusDTO from '../../../dtos/ICreateOrderStatusDTO';
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
			description: 'order aaaa',
			step: 3,
		});

		const update = await updateOrderStatusService.execute({
			...orderStatus,
			id: orderStatus.id,
			description: 'ordeiro',
		});

		expect(update.description).toEqual('ordeiro');
	});
});

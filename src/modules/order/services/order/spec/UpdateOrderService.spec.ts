import ICreateOrderDTO from '../../../dtos/ICreateOrderDTO';
import FakeOrderRepository from '../../../repositories/fakes/FakeOrderRepository';
import CreateOrderService from '../CreateOrderService';
import UpdateOrderService from '../UpdateOrderService';

describe('UpdateOrder', () => {
	let fakeOrderRepository: FakeOrderRepository;

	let createOrderService: CreateOrderService;
	let updateOrderService: UpdateOrderService;

	beforeEach(() => {
		fakeOrderRepository = new FakeOrderRepository();

		createOrderService = new CreateOrderService(fakeOrderRepository);
		updateOrderService = new UpdateOrderService(fakeOrderRepository);
	});

	it('should be able to update order', async () => {
		const order = await createOrderService.execute({
			user_id: 1,
			bundle_id: 1,
			order_status_id: 1,
		});

		const update = await updateOrderService.execute({
			...order,
			id: order.id,
			order_status_id: 3,
		});

		expect(update.order_status_id).toEqual(3);
	});
});

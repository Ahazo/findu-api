import { v4 as uuid } from 'uuid';

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
			user_id: uuid(),
			bundle_id: uuid(),
			order_status_id: uuid(),
			ahazo_tax: 5,
			total_value: 1000,
		});

		const fakeOrderStatusId = uuid();

		const update = await updateOrderService.execute({
			...order,
			id: order.id,
			order_status_id: fakeOrderStatusId,
		});

		expect(update.order_status_id).toEqual(fakeOrderStatusId);
	});
});

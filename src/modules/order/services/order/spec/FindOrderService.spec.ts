import { v4 as uuid } from 'uuid';

import FakeOrderRepository from '../../../repositories/fakes/FakeOrderRepository';
import CreateOrderService from '../CreateOrderService';
import FindOrderService from '../FindOrderService';

describe('FindOrder', () => {
	let fakeOrderRepository: FakeOrderRepository;

	let createOrderService: CreateOrderService;
	let findOrderService: FindOrderService;

	beforeEach(() => {
		fakeOrderRepository = new FakeOrderRepository();

		createOrderService = new CreateOrderService(fakeOrderRepository);
		findOrderService = new FindOrderService(fakeOrderRepository);
	});

	it('should be able to find order by its ID', async () => {
		const order = await createOrderService.execute({
			user_id: uuid(),
			bundle_id: uuid(),
			order_status_id: uuid(),
			ahazo_tax: 5,
			total_value: 1000,
		});

		expect(await findOrderService.executeById(order.id)).toBe(order);
	});

	it('should not be able to find order by its wrong ID', async () => {
		const order = await createOrderService.execute({
			user_id: uuid(),
			bundle_id: uuid(),
			order_status_id: uuid(),
			ahazo_tax: 5,
			total_value: 1000,
		});

		expect(await findOrderService.executeById(order.id + 1)).toBeUndefined();
	});
});

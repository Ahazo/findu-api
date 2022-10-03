import { v4 as uuid } from 'uuid';

import Order from '../../../infra/typeorm/entities/Order';
import FakeOrderRepository from '../../../repositories/fakes/FakeOrderRepository';
import CreateOrderService from '../CreateOrderService';

describe('CreateOrder', () => {
	let fakeOrderRepository: FakeOrderRepository;

	let createOrderService: CreateOrderService;

	beforeEach(() => {
		fakeOrderRepository = new FakeOrderRepository();

		createOrderService = new CreateOrderService(fakeOrderRepository);
	});

	it('should be able to create order', async () => {
		expect(
			await createOrderService.execute({
				user_id: uuid(),
				bundle_id: uuid(),
				order_status_id: uuid(),
				ahazo_tax: 5,
				total_value: 1000,
			})
		).toBeInstanceOf(Order);
	});
});

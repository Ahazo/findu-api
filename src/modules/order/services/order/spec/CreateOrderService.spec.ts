import ICreateOrderDTO from '../../../dtos/ICreateOrderDTO';
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
		const orderData: ICreateOrderDTO = {
			user_id: 1,
			bundle_id: 1,
			order_status_id: 1,
		};

		const order = await createOrderService.execute(orderData);

		expect(order).toBeInstanceOf(Order);
	});
});

// TO DO
// Check all tests
// Create a pattern

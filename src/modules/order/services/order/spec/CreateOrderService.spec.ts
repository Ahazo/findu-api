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
				user_id: 1,
				bundle_id: 1,
				order_status_id: 1,
			})
		).toBeInstanceOf(Order);
	});
});

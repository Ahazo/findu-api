import ICreateOrderDTO from '../../../dtos/ICreateOrderDTO';
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
			user_id: 1,
			bundle_id: 1,
			order_status_id: 1,
		});

		expect(await findOrderService.executeById(order.id)).toBe(order);
	});

	it('should not be able to find order by its wrong ID', async () => {
		const order = await createOrderService.execute({
			user_id: 1,
			bundle_id: 1,
			order_status_id: 1,
		});

		expect(await findOrderService.executeById(order.id + 1)).toBeUndefined();
	});
});

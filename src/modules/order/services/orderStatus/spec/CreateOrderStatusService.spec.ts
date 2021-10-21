import ICreateOrderStatusDTO from '../../../dtos/ICreateOrderStatusDTO';
import OrderStatus from '../../../infra/typeorm/entities/OrderStatus';
import FakeOrderStatusRepository from '../../../repositories/fakes/FakeOrderStatusRepository';
import CreateOrderStatusService from '../CreateOrderStatusService';

describe('CreateOrderStatus', () => {
	let fakeOrderStatusRepository: FakeOrderStatusRepository;

	let createOrderStatusService: CreateOrderStatusService;

	beforeEach(() => {
		fakeOrderStatusRepository = new FakeOrderStatusRepository();

		createOrderStatusService = new CreateOrderStatusService(
			fakeOrderStatusRepository
		);
	});

	it('should be able to create order status', async () => {
		const orderStatusData: ICreateOrderStatusDTO = {
			description: 'ordein',
			step: 1,
		};

		const orderStatus = await createOrderStatusService.execute(orderStatusData);

		expect(orderStatus).toBeInstanceOf(OrderStatus);
	});
});

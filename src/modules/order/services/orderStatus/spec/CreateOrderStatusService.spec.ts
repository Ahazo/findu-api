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
		expect(
			await createOrderStatusService.execute({
				description: 'ordein',
				step: 1,
			})
		).toBeInstanceOf(OrderStatus);
	});

	it('should not be able to create order status with the same name', async () => {
		const orderStatus = await createOrderStatusService.execute({
			description: 'ordein',
			step: 1,
		});

		const orderStatusWithSameName: ICreateOrderStatusDTO = {
			...orderStatus,
			description: 'ordein',
		};

		await expect(
			createOrderStatusService.execute(orderStatusWithSameName)
		).rejects.toBeInstanceOf(Error);
	});
});

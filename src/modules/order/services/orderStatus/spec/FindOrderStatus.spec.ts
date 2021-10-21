import ICreateOrderStatusDTO from '../../../dtos/ICreateOrderStatusDTO';
import FakeOrderStatusRepository from '../../../repositories/fakes/FakeOrderStatusRepository';
import CreateOrderStatusService from '../CreateOrderStatusService';
import FindOrderStatusService from '../FindOrderStatusService';

describe('FindOrderStatus', () => {
	let fakeOrderStatusRepository: FakeOrderStatusRepository;

	let createOrderStatusService: CreateOrderStatusService;
	let findOrderStatusService: FindOrderStatusService;

	beforeEach(() => {
		fakeOrderStatusRepository = new FakeOrderStatusRepository();

		createOrderStatusService = new CreateOrderStatusService(
			fakeOrderStatusRepository
		);
		findOrderStatusService = new FindOrderStatusService(
			fakeOrderStatusRepository
		);
	});

	it('should be able to find order status by its ID', async () => {
		const orderStatus = await createOrderStatusService.execute({
			description: 'order aaaa',
			step: 3,
		});

		expect(await findOrderStatusService.executeById(+orderStatus.id)).toBe(
			orderStatus
		);
	});

	it('should not be able to find order status by its wrong ID', async () => {
		const orderStatus = await createOrderStatusService.execute({
			description: 'order aaaa',
			step: 3,
		});

		expect(
			await findOrderStatusService.executeById(+orderStatus.id + 1)
		).toBeUndefined();
	});

	it('should be able to find order status by its name', async () => {
		const orderStatus = await createOrderStatusService.execute({
			description: 'order aaaa',
			step: 3,
		});

		expect(
			await findOrderStatusService.executeByName(orderStatus.description)
		).toBe(orderStatus);
	});

	it('should not be able to find order status by its wrong name', async () => {
		await createOrderStatusService.execute({
			description: 'order aaaa',
			step: 3,
		});

		expect(
			await findOrderStatusService.executeByName('aaaa redro')
		).toBeUndefined();
	});
});

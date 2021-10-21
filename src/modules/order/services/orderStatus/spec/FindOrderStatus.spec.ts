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
		const orderStatusData: ICreateOrderStatusDTO = {
			description: 'order aaaa',
			step: 3,
		};

		const orderStatus = await createOrderStatusService.execute(orderStatusData);

		const find = await findOrderStatusService.executeById(+orderStatus.id);

		expect(find).toBe(orderStatus);
	});

	it('should not be able to find order status by its wrong ID', async () => {
		const orderStatusData: ICreateOrderStatusDTO = {
			description: 'order aaaa',
			step: 3,
		};

		const orderStatus = await createOrderStatusService.execute(orderStatusData);

		const find = await findOrderStatusService.executeById(+orderStatus.id + 1);

		expect(find).toBe(undefined);
	});
});

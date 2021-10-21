import ICreateOrderLineDTO from '../../../dtos/ICreateOrderLineDTO';
import FakeOrderLineRepository from '../../../repositories/fakes/FakeOrderLineRepository';
import CreateOrderLineService from '../CreateOrderLineService';
import FindOrderLineService from '../FindOrderLineService';

describe('FindOrderLine', () => {
	let fakeOrderLineRepository: FakeOrderLineRepository;

	let createOrderLineService: CreateOrderLineService;
	let findOrderLineService: FindOrderLineService;

	beforeEach(() => {
		fakeOrderLineRepository = new FakeOrderLineRepository();

		createOrderLineService = new CreateOrderLineService(
			fakeOrderLineRepository
		);
		findOrderLineService = new FindOrderLineService(fakeOrderLineRepository);
	});

	it('should be able to find order line by its ID', async () => {
		const orderLineData: ICreateOrderLineDTO = {
			order_id: 1,
			freelancer_id: 1,
			total_value: 10,
		};

		const orderLine = await createOrderLineService.execute(orderLineData);

		const find = await findOrderLineService.executeById(orderLine.id);

		expect(find).toEqual(orderLine);
	});

	it('should not be able to find order line by its wrong ID', async () => {
		const orderLineData: ICreateOrderLineDTO = {
			order_id: 1,
			freelancer_id: 1,
			total_value: 10,
		};

		const orderLine = await createOrderLineService.execute(orderLineData);

		const find = await findOrderLineService.executeById(orderLine.id + 1);

		expect(find).toEqual(undefined);
	});
});

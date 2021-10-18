import ICreateOrderLineDTO from '../../../dtos/ICreateOrderLineDTO';
import OrderLine from '../../../infra/typeorm/entities/OrderLine';
import FakeOrderLineRepository from '../../../infra/typeorm/repositories/fakes/FakeOrderLineRepository';
import CreateOrderLineService from '../CreateOrderLineService';

describe('CreateOrderLine', () => {
	let fakeOrderLineRepository: FakeOrderLineRepository;

	let createOrderLineService: CreateOrderLineService;

	beforeEach(() => {
		fakeOrderLineRepository = new FakeOrderLineRepository();

		createOrderLineService = new CreateOrderLineService(
			fakeOrderLineRepository
		);
	});

	it('should be able to create order line', async () => {
		const orderLineData: ICreateOrderLineDTO = {
			order_id: 1,
			freelancer_id: 1,
			total_value: 2,
		};

		const orderLine = await createOrderLineService.execute(orderLineData);

		expect(orderLine).toBeInstanceOf(OrderLine);
	});
});

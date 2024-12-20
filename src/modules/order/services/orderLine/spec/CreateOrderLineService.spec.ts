import ICreateOrderLineDTO from '../../../dtos/ICreateOrderLineDTO';
import OrderLine from '../../../infra/typeorm/entities/OrderLine';
import FakeOrderLineRepository from '../../../repositories/fakes/FakeOrderLineRepository';
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
		expect(
			await createOrderLineService.execute({
				order_id: 1,
				freelancer_id: 1,
				total_value: 2,
			})
		).toBeInstanceOf(OrderLine);
	});
});

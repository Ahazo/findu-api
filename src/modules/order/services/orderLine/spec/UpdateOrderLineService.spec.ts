import ICreateOrderLineDTO from '../../../dtos/ICreateOrderLineDTO';
import FakeOrderLineRepository from '../../../repositories/fakes/FakeOrderLineRepository';
import CreateOrderLineService from '../CreateOrderLineService';
import UpdateOrderLineService from '../UpdateOrderLineService';

describe('UpdateOrderLine', () => {
	let fakeOrderLineRepository: FakeOrderLineRepository;

	let createOrderLineService: CreateOrderLineService;
	let updateOrderLineService: UpdateOrderLineService;

	beforeEach(() => {
		fakeOrderLineRepository = new FakeOrderLineRepository();

		createOrderLineService = new CreateOrderLineService(
			fakeOrderLineRepository
		);

		updateOrderLineService = new UpdateOrderLineService(
			fakeOrderLineRepository
		);
	});

	it('should be able to update Order Line', async () => {
		const orderLine = await createOrderLineService.execute({
			order_id: 1,
			freelancer_id: 1,
			total_value: 10,
		});

		const update = await updateOrderLineService.execute({
			...orderLine,
			id: orderLine.id,
			total_value: 5,
		});

		expect(update.total_value).toEqual(5);
	});
});

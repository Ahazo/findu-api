import ICreateOrderLineDTO from 'modules/order/dtos/ICreateOrderLineDTO';
import IOrderLineRepository from 'modules/order/repositories/IOrderLineRepository';

import OrderLine from '../../infra/typeorm/entities/OrderLine';

export default class FakeOrderLineRepository implements IOrderLineRepository {
	private orderLines: OrderLine[] = [];

	public async create(data: ICreateOrderLineDTO): Promise<OrderLine> {
		const orderLine = new OrderLine();

		Object.assign(
			orderLine,
			{ id: Math.floor(Math.random() * (100 - 1) + 1) },
			data
		);

		this.orderLines.push(orderLine);
		return orderLine;
	}

	public async save(data: OrderLine): Promise<OrderLine> {
		const findIndex = this.orderLines.findIndex(
			(findOrder) => findOrder.id === data.id
		);

		this.orderLines[findIndex] = data;
		return data;
	}

	public async findById(id: string): Promise<OrderLine | undefined> {
		const findOrder = this.orderLines.find((find) => find.id === id);

		return findOrder;
	}
}

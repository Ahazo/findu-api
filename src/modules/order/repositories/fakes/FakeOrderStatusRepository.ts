import ICreateOrderStatusDTO from '../../dtos/ICreateOrderStatusDTO';
import OrderStatus from '../../infra/typeorm/entities/OrderStatus';
import IOrderStatusRepository from '../IOrderStatusRepository';

export default class FakeOrderStatusRepository
	implements IOrderStatusRepository
{
	private orderStatus: OrderStatus[] = [];

	public async create(data: ICreateOrderStatusDTO): Promise<OrderStatus> {
		const orderStatus = new OrderStatus();

		Object.assign(
			orderStatus,
			{ id: Math.floor(Math.random() * (100 - 1) + 1) },
			data
		);

		this.orderStatus.push(orderStatus);

		return orderStatus;
	}

	public async save(data: OrderStatus): Promise<OrderStatus> {
		const find = this.orderStatus.findIndex(
			(findOrder) => findOrder.id === data.id
		);

		this.orderStatus[find] = data;
		return data;
	}

	public async findById(id: string): Promise<OrderStatus | undefined> {
		const findOrder = this.orderStatus.find((find) => +find.id === id);

		return findOrder;
	}

	public async findByName(name: string): Promise<OrderStatus | undefined> {
		const findOrder = this.orderStatus.find(
			(find) => find.description === name
		);

		return findOrder;
	}
}

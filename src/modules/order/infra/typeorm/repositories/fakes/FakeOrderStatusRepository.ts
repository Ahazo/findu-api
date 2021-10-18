import ICreateOrderStatusDTO from '../../../../dtos/ICreateOrderStatusDTO';
import IOrderStatusRepository from '../../../../repositories/IOrderStatusRepository';
import OrderStatus from '../../entities/OrderStatus';

export default class FakeOrderStatusRepository
	implements IOrderStatusRepository
{
	private orderStatus: OrderStatus[] = [];

	public async create(data: ICreateOrderStatusDTO): Promise<OrderStatus> {
		const orderStatus = new OrderStatus();

		Object.assign(
			orderStatus,
			{ id: Math.floor(Math.random() * (10 - 1) + 1) },
			data
		);

		this.orderStatus.push(orderStatus);

		return orderStatus;
	}

	public async save(data: OrderStatus): Promise<OrderStatus> {
		const find = await this.orderStatus.findIndex(
			(findOrder) => findOrder.id === data.id
		);

		this.orderStatus[find] = data;
		return data;
	}

	public async findById(id: number): Promise<OrderStatus | undefined> {
		const findOrder = await this.orderStatus.find((find) => +find.id === id);

		return findOrder;
	}
}

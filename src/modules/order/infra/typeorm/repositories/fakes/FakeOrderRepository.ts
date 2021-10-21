import ICreateOrderDTO from '../../../../dtos/ICreateOrderDTO';
import IOrderRepository from '../../../../repositories/IOrderRepository';
import Order from '../../entities/Order';

export default class FakeOrderRepository implements IOrderRepository {
	private orders: Order[] = [];

	async create(data: ICreateOrderDTO): Promise<Order> {
		const order = new Order();

		Object.assign(
			order,
			{ id: Math.floor(Math.random() * (100 - 1) + 1) },
			data
		);

		this.orders.push(order);
		return order;
	}

	async save(data: Order): Promise<Order> {
		const find = this.orders.findIndex((findOrder) => findOrder.id === data.id);

		this.orders[find] = data;
		return data;
	}

	async findById(id: number): Promise<Order | undefined> {
		const find = this.orders.find((findOrder) => findOrder.id === id);

		return find;
	}
}

import { getRepository, Repository, Any } from 'typeorm';

import ICreateOrderDTO from '../../../dtos/ICreateOrderDTO';
import IOrderRepository from '../../../repositories/IOrderRepository';
import Order from '../entities/Order';

export default class OrderRepository implements IOrderRepository {
	private orderRepository: Repository<Order>;

	constructor() {
		this.orderRepository = getRepository(Order);
	}

	async create(data: ICreateOrderDTO): Promise<Order> {
		const order = this.orderRepository.create(data);
		await this.orderRepository.save(order);

		return order;
	}

	async save(data: Order): Promise<Order> {
		return this.orderRepository.save(data);
	}

	async findById(id: number): Promise<Order | undefined> {
		const result = await this.orderRepository.findOne(id);

		return result;
	}
}

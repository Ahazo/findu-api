import { getRepository, Repository } from 'typeorm';

import ICreateOrderStatusDTO from '../../../dtos/ICreateOrderStatusDTO';
import IOrderStatusRepository from '../../../repositories/IOrderStatusRepository';
import OrderStatus from '../entities/OrderStatus';

export default class OrderStatusRepository implements IOrderStatusRepository {
	private orderStatusRepository: Repository<OrderStatus>;

	constructor() {
		this.orderStatusRepository = getRepository(OrderStatus);
	}

	async create(data: ICreateOrderStatusDTO): Promise<OrderStatus> {
		const orderStatus = await this.orderStatusRepository.create(data);

		await this.orderStatusRepository.save(orderStatus);

		return orderStatus;
	}

	async save(data: OrderStatus): Promise<OrderStatus> {
		return this.orderStatusRepository.save(data);
	}

	async findById(id: string): Promise<OrderStatus | undefined> {
		const result = await this.orderStatusRepository.findOne(id);

		return result;
	}

	async findByName(name: string): Promise<OrderStatus | undefined> {
		const result = await this.orderStatusRepository.findOne({ where: name });

		return result;
	}
}

import { getRepository, Repository, Any } from 'typeorm';

import ICreateOrderLineDTO from '../../../dtos/ICreateOrderLineDTO';
import IOrderLineRepository from '../../../repositories/IOrderLineRepository';
import OrderLine from '../entities/OrderLine';

export default class OrderLineRepository implements IOrderLineRepository {
	private orderLineRepository: Repository<OrderLine>;

	constructor() {
		this.orderLineRepository = getRepository(OrderLine);
	}

	public async create(data: ICreateOrderLineDTO): Promise<OrderLine> {
		const orderLine = await this.orderLineRepository.create(data);

		await this.orderLineRepository.save(orderLine);

		return orderLine;
	}

	public async save(data: OrderLine): Promise<OrderLine> {
		return this.orderLineRepository.save(data);
	}

	public async findById(id: number): Promise<OrderLine | undefined> {
		const result = await this.orderLineRepository.findOne(id);

		return result;
	}
}

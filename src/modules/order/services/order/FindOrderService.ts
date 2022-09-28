import { injectable, inject } from 'tsyringe';

import Order from '../../infra/typeorm/entities/Order';
import IOrderRepository from '../../repositories/IOrderRepository';

@injectable()
export default class FindOrderService {
	constructor(
		@inject('OrderRepository')
		private orderRepository: IOrderRepository
	) {}

	public async executeById(id: string): Promise<Order | undefined> {
		const result = await this.orderRepository.findById(id);

		return result;
	}
}

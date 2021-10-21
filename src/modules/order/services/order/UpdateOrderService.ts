import { injectable, inject } from 'tsyringe';

import Order from '../../infra/typeorm/entities/Order';
import IOrderRepository from '../../repositories/IOrderRepository';

@injectable()
export default class UpdateOrderService {
	constructor(
		@inject('OrderRepository')
		private orderRepository: IOrderRepository
	) {}

	public async execute(data: Order): Promise<Order> {
		return this.orderRepository.save(data);
	}
}

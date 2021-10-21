import { injectable, inject } from 'tsyringe';

import ICreateOrderDTO from '../../dtos/ICreateOrderDTO';
import Order from '../../infra/typeorm/entities/Order';
import IOrderRepository from '../../repositories/IOrderRepository';

@injectable()
export default class CreateOrderService {
	constructor(
		@inject('OrderRepository')
		private orderRepository: IOrderRepository
	) {}

	public async execute(data: ICreateOrderDTO): Promise<Order> {
		const result = await this.orderRepository.create(data);
		return result;
	}
}

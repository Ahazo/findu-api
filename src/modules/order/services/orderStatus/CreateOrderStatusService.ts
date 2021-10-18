import { injectable, inject } from 'tsyringe';

import ICreateOrderStatusDTO from '../../dtos/ICreateOrderStatusDTO';
import OrderStatus from '../../infra/typeorm/entities/OrderStatus';
import IOrderStatusRepository from '../../repositories/IOrderStatusRepository';

@injectable()
export default class CreateOrderStatusService {
	constructor(
		@inject('OrderStatusRepository')
		private orderStatusRepository: IOrderStatusRepository
	) {}

	public async execute(data: ICreateOrderStatusDTO): Promise<OrderStatus> {
		const result = await this.orderStatusRepository.create(data);
		return result;
	}
}

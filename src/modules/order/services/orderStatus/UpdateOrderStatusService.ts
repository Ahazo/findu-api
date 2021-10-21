import { injectable, inject } from 'tsyringe';

import OrderStatus from '../../infra/typeorm/entities/OrderStatus';
import IOrderStatusRepository from '../../repositories/IOrderStatusRepository';

@injectable()
export default class UpdateOrderStatusService {
	constructor(
		@inject('OrderStatusRepository')
		private orderStatusRepository: IOrderStatusRepository
	) {}

	public async execute(data: OrderStatus): Promise<OrderStatus> {
		return this.orderStatusRepository.save(data);
	}
}

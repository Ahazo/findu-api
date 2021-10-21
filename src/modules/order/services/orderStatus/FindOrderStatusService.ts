import { injectable, inject } from 'tsyringe';

import OrderStatus from '../../infra/typeorm/entities/OrderStatus';
import IOrderStatusRepository from '../../repositories/IOrderStatusRepository';

@injectable()
export default class FindOrderStatusService {
	constructor(
		@inject('OrderStatusRepository')
		private orderStatusRepository: IOrderStatusRepository
	) {}

	public async executeById(id: number): Promise<OrderStatus | undefined> {
		const result = await this.orderStatusRepository.findById(id);

		return result;
	}
}

import { injectable, inject } from 'tsyringe';

import OrderLine from '../../infra/typeorm/entities/OrderLine';
import IOrderLineRepository from '../../repositories/IOrderLineRepository';

@injectable()
export default class UpdateOrderLineService {
	constructor(
		@inject('OrderLineRepository')
		private orderLineRepository: IOrderLineRepository
	) {}

	public async execute(data: OrderLine): Promise<OrderLine> {
		return this.orderLineRepository.save(data);
	}
}

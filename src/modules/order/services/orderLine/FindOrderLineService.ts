import { injectable, inject } from 'tsyringe';

import OrderLine from '../../infra/typeorm/entities/OrderLine';
import IOrderLineRepository from '../../repositories/IOrderLineRepository';

@injectable()
export default class FindOrderLineService {
	constructor(
		@inject('OrderLineRepository')
		private orderLineRepository: IOrderLineRepository
	) {}

	public async executeById(id: number): Promise<OrderLine | undefined> {
		const result = await this.orderLineRepository.findById(id);

		return result;
	}
}

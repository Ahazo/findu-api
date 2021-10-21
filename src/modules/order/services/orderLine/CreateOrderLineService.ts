import { injectable, inject } from 'tsyringe';

import ICreateOrderLineDTO from '../../dtos/ICreateOrderLineDTO';
import OrderLine from '../../infra/typeorm/entities/OrderLine';
import IOrderLineRepository from '../../repositories/IOrderLineRepository';

@injectable()
export default class CreateOrderLineService {
	constructor(
		@inject('OrderLineRepository')
		private orderLineRepository: IOrderLineRepository
	) {}

	public async execute(data: ICreateOrderLineDTO): Promise<OrderLine> {
		const result = await this.orderLineRepository.create(data);

		return result;
	}
}

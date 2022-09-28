import ICreateOrderLineDTO from '../dtos/ICreateOrderLineDTO';
import OrderLine from '../infra/typeorm/entities/OrderLine';

export default interface IOrderLineRepository {
	create(data: ICreateOrderLineDTO): Promise<OrderLine>;
	save(data: OrderLine): Promise<OrderLine>;
	findById(id: string): Promise<OrderLine | undefined>;
}

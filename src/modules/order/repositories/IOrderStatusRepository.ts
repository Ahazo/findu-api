import ICreateOrderStatusDTO from '../dtos/ICreateOrderStatusDTO';
import OrderStatus from '../infra/typeorm/entities/OrderStatus';

export default interface IOrderStatusRepository {
	create(data: ICreateOrderStatusDTO): Promise<OrderStatus>;
	save(data: OrderStatus): Promise<OrderStatus>;
	findById(id: number): Promise<OrderStatus | undefined>;
	findByName(data: string): Promise<OrderStatus | undefined>;
}

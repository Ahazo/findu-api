import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Order from './Order';
import OrderLog from './OrderLog';

@Entity('order_status')
export default class OrderStatus {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', length: 40, nullable: true, unique: false })
	description: string;

	@OneToMany(() => OrderLog, (orderLog: OrderLog) => orderLog.orderStatus)
	orderLog: OrderLog[];

	@OneToMany(() => Order, (order: Order) => order.orderStatus)
	order: Order[];
}

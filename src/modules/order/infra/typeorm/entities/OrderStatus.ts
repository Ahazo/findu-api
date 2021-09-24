import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import Order from './Order';

@Entity('order_status')
export default class OrderStatus {
	@PrimaryGeneratedColumn()
	id: string;

	@OneToOne(() => Order, (order: Order) => order.orderStatus)
	order: number;

	@Column({ type: 'varchar', length: 40, nullable: true, unique: true })
	description: string;

	@Column({ type: 'int', nullable: false, unique: true })
	step: number;
}

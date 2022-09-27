import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import Order from './Order';
import OrderStatus from './OrderStatus';

@Entity('order_logs')
export default class OrderLog {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', nullable: true, unique: false })
	order_id: string;

	@ManyToOne(() => Order, (order: Order) => order.orderLog)
	@JoinColumn({ name: 'order_id' })
	order: Order;

	@Column({ type: 'varchar', nullable: true, unique: false })
	order_status_id: string;

	@ManyToOne(() => OrderStatus, (orderStatus: OrderStatus) => orderStatus.order)
	@JoinColumn({ name: 'order_status_id' })
	orderStatus: OrderStatus;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;
}

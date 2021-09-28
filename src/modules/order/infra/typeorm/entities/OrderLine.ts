import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import Freelancer from '../../../../freelancer/infra/typeorm/entities/Freelancer';
import Order from './Order';

@Entity('order_line')
export default class OrderLine {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'int', nullable: false, unique: true })
	order_id: number;

	@ManyToOne(() => Order, (order: Order) => order.orderLine)
	@JoinColumn({ name: 'order_id' })
	order: number;

	@Column({ type: 'int', nullable: false, unique: false })
	freelancer_id: number;

	@ManyToOne(() => Freelancer, (freelancer: Freelancer) => freelancer.orderLine)
	@JoinColumn({ name: 'freelancer_id' })
	freelancer: number;

	@Column({ type: 'int', nullable: false, unique: false })
	total_value: number;
}

import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import User from '../../../../user/infra/typeorm/entities/User';
import Order from './Order';

@Entity('delivery_agreements')
export default class DeliveryAgreement {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'int4', nullable: false, unique: false })
	order_id: number;

	@ManyToOne(() => Order, (order: Order) => order.deliveryAgreement)
	@JoinColumn({ name: 'order_id' })
	order: Order;

	@Column({ type: 'int4', nullable: false, unique: false })
	user_id: number;

	@ManyToOne(() => User, (user: User) => user.deliveryAgreement)
	@JoinColumn({ name: 'user_id' })
	user: User;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@Column({ type: 'varchar', nullable: false, unique: false })
	status: 'accepted' | 'refused';
}

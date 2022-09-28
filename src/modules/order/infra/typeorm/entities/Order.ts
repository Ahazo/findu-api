import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import Bundle from '../../../../freelancer/infra/typeorm/entities/bundle/Bundle';
import User from '../../../../user/infra/typeorm/entities/User';
import DeliveryAgreement from './DeliveryAgreement';
import OrderLog from './OrderLog';
import OrderStatus from './OrderStatus';

@Entity('orders')
export default class Order {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@OneToMany(
		() => DeliveryAgreement,
		(deliveryAgreement: DeliveryAgreement) => deliveryAgreement.order
	)
	deliveryAgreement: DeliveryAgreement[];

	@Column({ type: 'varchar', nullable: false, unique: false })
	user_id: string;

	@ManyToOne(() => User, (user: User) => user.order)
	@JoinColumn({ name: 'user_id' })
	user: User;

	@Column({ type: 'varchar', nullable: false, unique: false })
	bundle_id: string;

	@ManyToOne(() => Bundle, (bundle: Bundle) => bundle.order)
	@JoinColumn({ name: 'bundle_id' })
	bundle: Bundle;

	@Column({ type: 'int', nullable: false, unique: false })
	order_status_id: string;

	@ManyToOne(() => OrderStatus, (orderStatus: OrderStatus) => orderStatus.order)
	@JoinColumn({ name: 'order_status_id' })
	orderStatus: OrderStatus;

	@Column({ type: 'real', nullable: false, unique: false })
	ahazo_tax: number;

	@Column({ type: 'real', nullable: false, unique: false })
	total_value: number;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@OneToMany(() => OrderLog, (orderLog: OrderLog) => orderLog.order)
	orderLog: OrderLog[];
}

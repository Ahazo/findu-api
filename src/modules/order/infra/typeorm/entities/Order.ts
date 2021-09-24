import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import Bundle from '../../../../bundle/infra/typeorm/entities/Bundle';
import User from '../../../../user/infra/typeorm/entities/User';
import DeliveryAgreement from './DeliveryAgreement';
import OrderLine from './OrderLine';
import OrderStatus from './OrderStatus';

@Entity('order')
export default class Order {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToMany(
		() => DeliveryAgreement,
		(deliveryAgreement: DeliveryAgreement) => deliveryAgreement.order
	)
	deliveryAgreement: DeliveryAgreement;

	@ManyToOne(() => OrderLine, (orderLine: OrderLine) => orderLine.order)
	orderLine: number;

	@Column({ type: 'int4', nullable: false, unique: true })
	user_id: number;

	@ManyToOne(() => User, (user: User) => user.order)
	@JoinColumn({ name: 'user_id' })
	user: number;

	@Column({ type: 'int4', nullable: false, unique: true })
	bundle_id: number;

	@ManyToOne(() => Bundle, (bundle: Bundle) => bundle.order)
	@JoinColumn({ name: 'bundle_id' })
	bundle: number;

	@Column({ type: 'int4', nullable: false, unique: true })
	order_status_id: number;

	@OneToOne(() => OrderStatus, (orderStatus: OrderStatus) => orderStatus.order)
	@JoinColumn({ name: 'order_status_id' })
	orderStatus: number;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;
}

import {
	Entity,
	PrimaryGeneratedColumn,
	OneToOne,
	Column,
	JoinColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import Freelancer from '../../../../freelancer/infra/typeorm/entities/Freelancer';
import DeliveryAgreement from '../../../../order/infra/typeorm/entities/DeliveryAgreement';
import Order from '../../../../order/infra/typeorm/entities/Order';
import Follower from './Followers';
import Person from './Person';
import ProfilePhoto from './ProfilePhoto';
import Recommendation from './Recommendation';

@Entity('users')
export default class User {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', nullable: false, unique: true })
	person_id: string;

	@OneToOne(() => Person, (person: Person) => person.user, {
		eager: true,
		cascade: true,
	})
	@JoinColumn({ name: 'person_id' })
	person: Person;

	@Column({ type: 'varchar', length: 30, nullable: false, unique: true })
	username: string;

	@Column({ type: 'varchar', length: 120, nullable: false, unique: false })
	password: string;

	@Column({ type: 'varchar', length: 120, nullable: true, unique: false })
	description: string;

	@Column({ type: 'int', nullable: false, unique: false, default: 0 })
	follower_count: number;

	@Column({ type: 'int', nullable: false, unique: false, default: 0 })
	following_count: number;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;

	@OneToMany(
		() => DeliveryAgreement,
		(deliveryAgreement: DeliveryAgreement) => deliveryAgreement.user
	)
	deliveryAgreement: DeliveryAgreement[];

	@OneToMany(
		() => ProfilePhoto,
		(profilePhoto: ProfilePhoto) => profilePhoto.user
	)
	profilePhoto: ProfilePhoto[];

	@OneToMany(() => Order, (order: Order) => order.user)
	order: Order[];

	@OneToOne(() => Freelancer, (freelancer: Freelancer) => freelancer.user, {
		eager: true,
	})
	freelancer: Freelancer;

	@OneToMany(
		() => Recommendation,
		(recommendation: Recommendation) => recommendation.user
	)
	recommendation: Recommendation[];

	@OneToMany(() => Follower, (follower: Follower) => follower.user_id)
	follower_parent: Follower[];

	@OneToMany(() => Follower, (follower: Follower) => follower.followed_user_id)
	follower_child: Follower[];
}

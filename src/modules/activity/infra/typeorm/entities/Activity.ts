import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import { EActivityStatus } from '../../../../../shared/utils/enums/EActivityStatus';
import Specialization from '../../../../freelancer/infra/typeorm/entities/Specialization';
import User from '../../../../user/infra/typeorm/entities/User';

@Entity('activities')
export default class Activity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', nullable: false, unique: true })
	user_id: string;

	@ManyToOne(() => User, (user: User) => user.activity_parent)
	@JoinColumn({ name: 'user_id' })
	user: User;

	@Column({ type: 'varchar', nullable: false, unique: true })
	target_user_id: string;

	@ManyToOne(() => User, (user: User) => user.activity_child)
	@JoinColumn({ name: 'target_user_id' })
	target_user: User;

	@Column({ type: 'varchar', nullable: false, unique: true })
	specialization_id: string;

	@ManyToOne(
		() => Specialization,
		(specialization: Specialization) => specialization.activity,
		{ eager: true }
	)
	@JoinColumn({ name: 'specialization_id' })
	specialization: Specialization;

	@Column({ type: 'real', nullable: false, unique: true })
	value: number;

	@Column({ type: 'enum', enum: EActivityStatus })
	status: EActivityStatus;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;
}

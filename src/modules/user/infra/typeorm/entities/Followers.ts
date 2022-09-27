import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import User from './User';

@Entity('followers')
export default class Follower {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', nullable: false, unique: false })
	user_id: string;

	@ManyToOne(() => User, (user: User) => user.follower_parent)
	@JoinColumn({ name: 'user_id' })
	user: User;

	@Column({ type: 'varchar', nullable: false, unique: false })
	followed_user_id: string;

	@ManyToOne(() => User, (user: User) => user.follower_child)
	@JoinColumn({ name: 'followed_user_id' })
	followedUser: User;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;
}

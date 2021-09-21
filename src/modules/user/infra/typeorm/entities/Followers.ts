import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import User from './User';

@Entity('followers')
export default class Follower {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({type: 'int4', nullable: false, unique: true})
	user_id: number;

	@ManyToOne(() => User, (user: User) => user.follower_parent)
	@JoinColumn({ name: 'user_id'})
	user: User;

	@Column({type: 'int4', nullable: false, unique: true})
	followed_user_id: number;

	@ManyToOne(() => User, (user: User) => user.follower_child)
	@JoinColumn({ name: 'followed_user_id'})
	followedUser: User;

	@Column({type: 'enum', enum: EStatus, default: EStatus.active})
	status: EStatus;
}

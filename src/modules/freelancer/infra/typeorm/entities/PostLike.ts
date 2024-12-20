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
import User from '../../../../user/infra/typeorm/entities/User';
import Post from './Post';

@Entity('post_like')
export default class PostLike {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'int', nullable: false, unique: false })
	post_id: number;

	@ManyToOne(() => Post, (post: Post) => post.postLike)
	@JoinColumn({ name: 'post_id' })
	post: number;

	@Column({ type: 'int', nullable: false, unique: false })
	user_id: number;

	@ManyToOne(() => User, (user: User) => user.postLike)
	@JoinColumn({ name: 'user_id' })
	user: number;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;
}

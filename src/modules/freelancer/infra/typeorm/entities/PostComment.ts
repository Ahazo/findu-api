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

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import User from '../../../../user/infra/typeorm/entities/User';
import Post from './Post';

@Entity('post_comment')
export default class PostComment {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'int', nullable: false, unique: false })
	post_id: number;

	@ManyToOne(() => Post, (post: Post) => post.postComment)
	@JoinColumn({ name: 'post_id' })
	post: number;

	@Column({ type: 'int', nullable: false, unique: false })
	user_id: number;

	@OneToMany(() => User, (user: User) => user.postComment)
	@JoinColumn({ name: 'user_id' })
	user: number;

	@Column({ type: 'varchar', nullable: false, unique: true })
	content: string;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;
}

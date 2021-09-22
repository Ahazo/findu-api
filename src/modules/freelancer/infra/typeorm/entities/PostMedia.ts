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
import Post from './Post';

@Entity('post_media')
export default class PostMedia {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'int4', nullable: false, unique: false })
	post_id: number;

	@ManyToOne(() => Post, (post: Post) => post.postMedia)
	@JoinColumn({ name: 'post_id' })
	post: number;

	@Column({ type: 'varchar', nullable: false, unique: true })
	url: string;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;
}

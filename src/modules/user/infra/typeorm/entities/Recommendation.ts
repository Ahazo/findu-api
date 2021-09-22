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
import PostRecommendation from './PostRecommendation';
import User from './User';

@Entity('recommendations')
export default class Recommendation {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'int4', nullable: false, unique: false })
	post_id: number;

	@ManyToOne(
		() => PostRecommendation,
		(postRecommendation: PostRecommendation) =>
			postRecommendation.recommendation
	)
	@JoinColumn({ name: 'post_id' })
	postRecommendation: PostRecommendation;

	@Column({ type: 'int4', nullable: false, unique: false })
	user_id: number;

	@ManyToOne(() => User, (user: User) => user.recommendation)
	@JoinColumn({ name: 'user_id' })
	user: User;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;
}

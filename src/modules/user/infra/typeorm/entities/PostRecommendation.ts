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
import Freelancer from '../../../../freelancer/infra/typeorm/entities/Freelancer';
import Recommendation from './Recommendation';
import User from './User';

@Entity('post_recommendations')
export default class PostRecommendation {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'int', nullable: false, unique: false })
	user_id: number;

	@ManyToOne(() => User, (user: User) => user.postRecommendation)
	@JoinColumn({ name: 'user_id' })
	user: User;

	@Column({ type: 'int', nullable: false, unique: false })
	freelancer_id: number;

	@ManyToOne(
		() => Freelancer,
		(freelancer: Freelancer) => freelancer.postRecommendation
	)
	@JoinColumn({ name: 'freelancer_id' })
	freelancer: Freelancer;

	@OneToMany(
		() => Recommendation,
		(recommendation: Recommendation) => recommendation.postRecommendation
	)
	recommendation: Recommendation;

	@Column({ type: 'varchar', nullable: false, unique: false })
	content: string;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;
}

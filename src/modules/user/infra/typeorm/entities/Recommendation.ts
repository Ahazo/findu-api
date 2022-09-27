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
import Freelancer from '../../../../freelancer/infra/typeorm/entities/Freelancer';
import User from './User';

@Entity('recommendations')
export default class Recommendation {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', nullable: false, unique: false })
	user_id: string;

	@ManyToOne(() => User, (user: User) => user.recommendation)
	@JoinColumn({ name: 'user_id' })
	user: User;

	@Column({ type: 'varchar', nullable: false, unique: false })
	recommended_freelancer_id: string;

	@ManyToOne(
		() => Freelancer,
		(freelancer: Freelancer) => freelancer.recommendation
	)
	@JoinColumn({ name: 'recommended_freelancer_id' })
	freelancer: Freelancer;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;
}

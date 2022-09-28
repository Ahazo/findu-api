import {
	Column,
	Entity,
	JoinColumn,
	PrimaryGeneratedColumn,
	ManyToOne,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/enums/EStatus';
import Freelancer from './Freelancer';
import Specialization from './Specialization';

@Entity('skills')
export default class Skill {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', nullable: false, unique: false })
	specialization_id: string;

	@ManyToOne(
		() => Specialization,
		(specialization: Specialization) => specialization.skill,
		{ eager: true }
	)
	@JoinColumn({ name: 'specialization_id' })
	specialization: Specialization;

	@Column({ type: 'varchar', nullable: false, unique: false })
	freelancer_id: string;

	@ManyToOne(() => Freelancer, (freelancer: Freelancer) => freelancer.skill)
	@JoinColumn({ name: 'freelancer_id' })
	freelancer: Freelancer;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;
}

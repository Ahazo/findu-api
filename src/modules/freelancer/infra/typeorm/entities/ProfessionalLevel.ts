import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import Freelancer from './Freelancer';

@Entity('professional_levels')
export default class ProfessionalLevel {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'int4', nullable: false, unique: true })
	level_number: number;

	@Column({ type: 'varchar', nullable: false, unique: false })
	description: string;

	@Column({ type: 'int', nullable: false, unique: false })
	experience_needed: number;

	@OneToMany(() => Freelancer, (freelancer: Freelancer) => freelancer.user)
	freelancer: Freelancer;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;
}

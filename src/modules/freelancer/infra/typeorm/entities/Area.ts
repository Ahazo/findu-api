import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import Specialization from './Specialization';

@Entity('areas')
export default class Area {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', nullable: false, unique: true })
	description: string;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@OneToMany(
		() => Specialization,
		(specialization: Specialization) => specialization.area
	)
	specialization: Specialization[];
}

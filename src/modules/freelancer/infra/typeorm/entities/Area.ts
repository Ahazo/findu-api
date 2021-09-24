import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import Specialization from './Specialization';

@Entity('areas')
export default class Area {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', nullable: false, unique: true })
	description: string;

	@OneToMany(
		() => Specialization,
		(specialization: Specialization) => specialization.area
	)
	specialization: Specialization;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;
}

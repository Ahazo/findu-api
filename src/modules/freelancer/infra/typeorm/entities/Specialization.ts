import {
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	OneToMany,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import Area from './Area';
import Skill from './Skill';

@Entity('specializations')
export default class Specialization {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToMany(() => Skill, (skill: Skill) => skill.specialization)
	skill: number;

	@Column({ type: 'int', nullable: false, unique: false })
	area_id: number;

	@OneToOne(() => Area, (area: Area) => area.specialization)
	@JoinColumn({ name: 'area_id' })
	area: Area;

	@Column({ type: 'varchar', nullable: false, unique: false })
	description: string;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;
}

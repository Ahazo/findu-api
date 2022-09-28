import {
	Column,
	Entity,
	JoinColumn,
	PrimaryGeneratedColumn,
	OneToMany,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/enums/EStatus';
import Activity from '../../../../activity/infra/typeorm/entities/Activity';
import Area from './Area';
import Skill from './Skill';

@Entity('specializations')
export default class Specialization {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', nullable: false, unique: false })
	area_id: string;

	@ManyToOne(() => Area, (area: Area) => area.specialization, { eager: true })
	@JoinColumn({ name: 'area_id' })
	area: Area;

	@Column({ type: 'varchar', nullable: false, unique: false })
	description: string;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@OneToMany(() => Skill, (skill: Skill) => skill.specialization)
	skill: Skill[];

	@OneToMany(() => Activity, (activity: Activity) => activity.specialization)
	activity: Activity[];
}

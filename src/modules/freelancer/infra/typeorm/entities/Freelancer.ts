import {
	Column,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	Entity,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/enums/EStatus';
import Recommendation from '../../../../user/infra/typeorm/entities/Recommendation';
import User from '../../../../user/infra/typeorm/entities/User';
import Bundle from './bundle/Bundle';
import Skill from './Skill';

@Entity('freelancers')
export default class Freelancer {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', nullable: false, unique: true })
	user_id: string;

	@OneToOne(() => User, (user: User) => user.freelancer)
	@JoinColumn({ name: 'user_id' })
	user: User;

	@Column({ type: 'varchar', nullable: true, unique: false })
	title: string;

	@Column({ type: 'int', nullable: false, unique: false, default: 0 })
	projects_count: number;

	@Column({ type: 'bool', nullable: false, unique: false, default: true })
	open_to_work: boolean;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@OneToMany(() => Skill, (skill: Skill) => skill.freelancer, { eager: true })
	skill: Skill[];

	@OneToMany(
		() => Recommendation,
		(recommendation: Recommendation) => recommendation.freelancer
	)
	recommendation: Recommendation[];

	@OneToMany(() => Bundle, (bundle: Bundle) => bundle.freelancer)
	bundle: Bundle[];
}

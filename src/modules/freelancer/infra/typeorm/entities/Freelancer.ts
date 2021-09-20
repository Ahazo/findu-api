import { EStatus } from '../../../../../shared/utils/dtos/EStatus';

import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, Entity } from 'typeorm';

import ProfessionalLevel from './ProfessionalLevel';
import BundleRelation from '../../../../bundle/infra/http/typeorm/entities/BundleRelation';
import Skill from './Skill';
import User from '../../../../user/infra/typeorm/entities/User';

@Entity('freelancers')
export default class Freelancer {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({type: 'int4', nullable: false, unique: true})
	user_id: number

	@OneToOne(() => User, (user: User) => user.freelancer)
	@JoinColumn({name: 'user_id'})
	user: User;

	@Column({type: 'int4', nullable: false, unique: false, default: 1})
	level_id: number

	@OneToOne(() => ProfessionalLevel, (professionalLevel: ProfessionalLevel) => professionalLevel.freelancer)
	@JoinColumn({name: 'user_id'})
	professionalLevel: ProfessionalLevel;

	@Column({type: 'number', nullable: false, unique: true})
	projects_count: number;

	@Column({type: 'number', nullable: false, unique: false})
	experience: number;

	@Column({type: 'bool', nullable: false, unique: false})
	open_to_work: boolean;

	@CreateDateColumn({type: 'timestamp', nullable: false, unique: false})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp', nullable: false, unique: false})
  updated_at: Date;

	@OneToMany(() => BundleRelation, (bundleRelation: BundleRelation) => bundleRelation.freelancer, { eager: true })
	bundleRelation: BundleRelation;

	@OneToMany(() => Skill, (skill: Skill) => skill.freelancer, { eager: true })
	skill: Skill;

	@Column({type: 'enum', enum: EStatus, default: EStatus.active})
	status: EStatus;
}

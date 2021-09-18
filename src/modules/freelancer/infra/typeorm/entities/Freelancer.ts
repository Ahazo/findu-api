import { EStatus } from 'shared/utils/dtos/EStatus';
import User from 'modules/user/infra/typeorm/entities/User';
import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import ProfessionalLevel from './ProfessionalLevel';

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

	@Column({type: 'enum', enum: EStatus, default: EStatus.active})
	status: EStatus;
}

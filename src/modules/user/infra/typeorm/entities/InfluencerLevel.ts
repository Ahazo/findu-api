import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import User from './User';

@Entity('influencer_levels')
export default class InfluencerLevel {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', nullable: false, unique: false })
	description: string;

	@Column({ type: 'int', nullable: false, unique: false })
	experience_needed: number;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;

	@OneToMany(() => User, (user: User) => user.level_id)
	user: User;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;
}

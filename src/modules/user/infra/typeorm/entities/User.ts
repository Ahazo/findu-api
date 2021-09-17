
import { EStatus } from 'shared/utils/dtos/EStatus';
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import InfluencerLevel from './InfluencerLevel';
import Person from './Person';

@Entity('user')
export default class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({type: 'int4', nullable: false, unique: true})
	person_id: number;

	@OneToOne(() => Person, (person: Person) => person.user, { eager: true, cascade: true })
	@JoinColumn({ name: 'person_id'})
	person: Person;

	@Column({type: 'varchar', length: 30, nullable: false, unique: true})
	username: string;

	@Column({type: 'varchar', length: 120, nullable: false, unique: true})
	password: string;

	@Column({type: 'int4', nullable: false, unique: false, default: 0})
	experience: number;

	@Column({type: 'int4', nullable: false, unique: false})
	influence_level_id: number;

	@OneToOne(() => InfluencerLevel, (influencerLevel: InfluencerLevel) => influencerLevel.user, { eager: true })
	@JoinColumn({ name: 'influence_level_id'})
	influencerLevel: InfluencerLevel

	@Column({type: 'number', nullable: false, unique: true, default: 0})
	follower_count: number;

	@Column({type: 'number', nullable: false, unique: true, default: 0})
	following_count: number;

	@CreateDateColumn({type: 'timestamp', nullable: false, unique: false})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp', nullable: false, unique: false})
  updated_at: Date;

	@Column({type: 'enum', enum: EStatus, default: EStatus.active})
	status: EStatus;
}

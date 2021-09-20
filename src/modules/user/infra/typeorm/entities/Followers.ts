import { EStatus } from 'shared/utils/dtos/EStatus';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import User from './User';

@Entity('followers')
export default class InfluencerLevel {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToMany(() => User, (user: User) => user.level_id)
	@JoinColumn({ name: 'user_id'})
	user: User;



}

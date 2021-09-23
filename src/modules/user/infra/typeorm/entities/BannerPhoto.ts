import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import User from './User';

@Entity('banner_photos')
export default class BannerPhoto {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'int', nullable: false, unique: true })
	user_id: number;

	@ManyToOne(() => User, (user: User) => user.bannerPhoto)
	@JoinColumn({ name: 'user_id' })
	user: User;

	@Column({ type: 'varchar', nullable: false, unique: true })
	url: string;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;
}

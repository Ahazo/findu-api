import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	JoinColumn,
	ManyToOne,
	UpdateDateColumn,
	CreateDateColumn,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import Bundle from './Bundle';

@Entity('bundle_medias')
export default class BundleMedia {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'int', nullable: false, unique: false })
	bundle_id: number;

	@ManyToOne(() => Bundle, (bundle: Bundle) => bundle.bundleMedia)
	@JoinColumn({ name: 'bundle_id' })
	bundle: Bundle;

	@Column({ type: 'varchar', nullable: true, unique: false })
	url: string;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;
}

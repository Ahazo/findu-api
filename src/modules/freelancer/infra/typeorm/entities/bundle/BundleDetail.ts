import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToOne,
} from 'typeorm';

import Bundle from './Bundle';

@Entity('bundle_details')
export default class BundleDetail {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', nullable: true, unique: false })
	bundle_id: string;

	@Column({ type: 'varchar', nullable: false, unique: false })
	description: string;

	@Column({ type: 'real', nullable: false, unique: false })
	value: number;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@OneToOne(() => Bundle, (bundle: Bundle) => bundle.bundleDetail)
	bundle: Bundle;
}

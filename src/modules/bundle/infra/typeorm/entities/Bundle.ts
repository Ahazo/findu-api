import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import Order from '../../../../order/infra/typeorm/entities/Order';
import BundleMedia from './BundleMedia';
import BundleRelation from './BundleRelation';

@Entity('bundles')
export default class Bundle {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToMany(() => Order, (order: Order) => order.bundle)
	order: number;

	@Column({ type: 'varchar', length: 50, nullable: false, unique: false })
	title: string;

	@Column({ type: 'varchar', length: 200, nullable: true, unique: false })
	description: string;

	@Column({ type: 'decimal', nullable: false, unique: false })
	value: number;

	@Column({ type: 'int', nullable: false, unique: false })
	deadline: number;

	@OneToMany(
		() => BundleMedia,
		(bundleMedia: BundleMedia) => bundleMedia.bundle,
		{ eager: true }
	)
	bundleMedia: BundleMedia;

	@OneToMany(
		() => BundleRelation,
		(bundleRelation: BundleRelation) => bundleRelation.bundle,
		{ eager: true, cascade: true }
	)
	bundleRelation: BundleRelation[];

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;
}

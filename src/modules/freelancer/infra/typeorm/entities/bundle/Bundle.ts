import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	CreateDateColumn,
	UpdateDateColumn,
	OneToOne,
	JoinColumn,
} from 'typeorm';

import { EStatus } from '../../../../../../shared/utils/dtos/EStatus';
import Order from '../../../../../order/infra/typeorm/entities/Order';
import Freelancer from '../Freelancer';
import BundleDetail from './BundleDetail';
import BundleMedia from './BundleMedia';

@Entity('bundles')
export default class Bundle {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', nullable: true, unique: false })
	freelancer_id: string;

	@OneToOne(() => Freelancer, (Freelancer) => Freelancer.bundle)
	@JoinColumn({ name: 'freelancer_id' })
	freelancer: Freelancer;

	@Column({ type: 'varchar', nullable: false, unique: false })
	title: string;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@OneToMany(() => Order, (order: Order) => order.bundle)
	order: Order[];

	@OneToMany(
		() => BundleMedia,
		(bundleMedia: BundleMedia) => bundleMedia.bundle,
		{ eager: true }
	)
	bundleMedia: BundleMedia[];

	@OneToOne(
		() => BundleDetail,
		(bundleDetail: BundleDetail) => bundleDetail.bundle
	)
	bundleDetail: BundleDetail;
}

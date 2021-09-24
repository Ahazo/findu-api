import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	JoinColumn,
	ManyToOne,
	UpdateDateColumn,
	CreateDateColumn,
} from 'typeorm';

import Freelancer from '../../../../freelancer/infra/typeorm/entities/Freelancer';
import Bundle from './Bundle';

@Entity('bundle_relations')
export default class BundleRelation {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'int', nullable: false, unique: false })
	bundle_id: number;

	@ManyToOne(() => Bundle, (bundle: Bundle) => bundle.bundleRelation)
	@JoinColumn({ name: 'bundle_id' })
	bundle: Bundle;

	@Column({ type: 'int', nullable: false, unique: false })
	freelancer_id: number;

	@ManyToOne(
		() => Freelancer,
		(freelancer: Freelancer) => freelancer.bundleRelation
	)
	@JoinColumn({ name: 'freelancer_id' })
	freelancer: Bundle;

	@Column({ type: 'int', nullable: false, unique: true })
	percentage: number;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;
}

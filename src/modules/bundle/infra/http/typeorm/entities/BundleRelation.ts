import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm'

import Bundle from './Bundle'
import Freelancer from '../../../../../freelancer/infra/typeorm/entities/Freelancer'

@Entity('bundle_relations')
export default class BundleRelation {
  @PrimaryGeneratedColumn()
  id: number;

	@Column({type: 'int4', nullable: false, unique: false})
	bundle_id: number;

	@ManyToOne(() => Bundle, (bundle: Bundle) => bundle.bundleRelation)
	@JoinColumn({name: 'bundle_id'})
	bundle: Bundle;

	@Column({type: 'int4', nullable: false, unique: false})
	freelancer_id: number;

	@ManyToOne(() => Freelancer, (freelancer: Freelancer) => freelancer.bundleRelation)
	@JoinColumn({name: 'freelancer_id'})
	freelancer: Bundle;

  @Column({type: 'number', nullable: false, unique: true})
  percentage: number;
}

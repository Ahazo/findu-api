import Order from '../../../../../../order/dtos/infra/typeorm/entities/Order';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import { EStatus } from '../../../../../../../shared/utils/dtos/EStatus'
import BundleMedia from './BundleMedia';
import BundleRelation from './BundleRelation';

@Entity('bundles')
export default class Bundle{
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Order, (order: Order) => order.bundle)
  order: number;

  @Column({type: 'varchar', length: 50, nullable: false, unique: true })
  title: string;

  @Column({type: 'varchar', length: 200, nullable: true, unique: true })
  description: string;

  @Column({type: 'number', nullable: false, unique: true })
  value: number;

  @Column({type: 'timestamp', nullable: false, unique: true })
  deadline: Date;

	@OneToMany(() => BundleMedia, (bundleMedia: BundleMedia) => bundleMedia.bundle, { eager: true })
	bundleMedia: BundleMedia;

	@OneToMany(() => BundleRelation, (bundleRelation: BundleRelation) => bundleRelation.bundle, { eager: true })
	bundleRelation: BundleRelation;

  @Column({type: 'enum', enum: EStatus, default: EStatus.active})
	status: EStatus;
}

import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm'

import { EStatus } from '../../../../../../shared/utils/dtos/EStatus'
import Bundle from './Bundle'


@Entity('bundle_medias')
export default class BundleMedia {
  @PrimaryGeneratedColumn()
  id: number;

	@Column({type: 'int4', nullable: false, unique: false})
	bundle_id: number;

  @ManyToOne(() => Bundle, (bundle: Bundle) => bundle.bundleMedia)
  @JoinColumn({name: 'bundle_id'})
  bundle: Bundle;


  @Column({type: 'varchar', nullable: true, unique: true})
  url: string;

  @Column({type: 'enum', enum: EStatus, default: EStatus.active})
	status: EStatus;
}

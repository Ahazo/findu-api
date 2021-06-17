import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';

import Establishment from '../../../../establishment/infra/typeorm/entities/Establishment';
import Corporation from '../../../../corporation/infra/typeorm/entities/Corporation';
import Department from './Department';

@Entity('brands')
class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int4', nullable: true})
  corporation_id: number;

  @ManyToOne(() => Corporation, (corporation: Corporation) => corporation.brand,{ eager: true })
  @JoinColumn({name:'corporation_id'})
  corporation: Corporation;

  @Column({type: 'varchar', nullable: false, unique: true})
  brand_name: string;

  @Column({type: 'int4', nullable: false, unique: false})
  department_id: number;

  @ManyToOne(() => Department, (department: Department) => department.brand)
  @JoinColumn({name:'department_id'})
  department: Department;

  @OneToMany(() => Establishment, (establishment: Establishment) => establishment.brand)
  establishment: Establishment;

  @Column({type:'enum', enum: EStatus, default: EStatus.active})
  status: EStatus;

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp'})
  updated_at: Date;
}

export default Brand;

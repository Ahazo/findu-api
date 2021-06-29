import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import Brand from './Brand';

@Entity('departments')
class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', nullable: false, unique: true})
  department_name: string;

  @Column({type:'enum', enum: EStatus, default: EStatus.active})
  status: EStatus;

  @OneToMany(() => Brand, (brand: Brand) => brand.department)
  brand: Brand;

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp'})
  updated_at: Date;
}

export default Department;

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';

import Brand from '../../../../brand/infra/typeorm/entities/Brand';
import EstablishmentAddress from './EstablishmentAddress';

@Entity('establishments')
class Establishment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int4'})
  brand_id: number;

  @OneToOne(() => Brand, (brand: Brand) => brand.establishment, { eager: true })
  @JoinColumn({name:'brand_id'})
  brand: Brand;

  @Column({type: 'varchar', nullable: false, unique: true})
  establishment_name: string;

  @Column({type: 'varchar', nullable: true, unique: true})
  landline: string;

  @Column({type: 'varchar', nullable: true})
  stablishment_cnpj: string;

  @Column({type:'int',nullable:true})
  address_id: number;

  @OneToOne(() => EstablishmentAddress, (establishmentAddress: EstablishmentAddress) => establishmentAddress.establishment, { cascade: true })
  @JoinColumn({name:'address_id'})
  establishment_address: EstablishmentAddress;

  @Column({type:'enum', enum: EStatus, default: EStatus.active})
  status: EStatus;

  @Column({type:'int4', nullable: false, unique: false, default:0})
  followers_count: number;

  @Column({type:'int4', nullable: false, unique: false, default:0})
  campaigns_count: number;

  @Column({type:'int4', nullable: false, unique: false, default:0})
  experience: number;

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp'})
  updated_at: Date;
}

export default Establishment;
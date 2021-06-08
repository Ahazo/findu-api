import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne
} from 'typeorm';

import Establishment from './Establishment';


@Entity('establishment_address')
class EstablishmentAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'varchar',length:9,nullable:false,unique:false})
  postal_code:string;

  @Column({type:'varchar',length:100, nullable:false, unique:false})
  street:string;

  @Column({type:'int4', nullable:false,unique:false})
  establishment_number:number;

  @Column({type:'varchar',length:100, nullable:false, unique:false})
  city:string;

  @Column({type:'varchar',length:2, nullable:false, unique:false})
  state:string;

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp'})
  updated_at: Date;

  @OneToOne(()=> Establishment, (establishment: Establishment) => establishment.establishment_address)
  establishment: Establishment;
}

export default EstablishmentAddress;
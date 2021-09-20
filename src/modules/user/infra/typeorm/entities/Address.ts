import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Person from './Person';

@Entity('addresses')
export default class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 9, nullable: false, unique: false})
  postal_code: string;

  @Column({type: 'varchar', length: 100, nullable: false, unique: false})
  street: string;

  @Column({type: 'int4', nullable: false,unique: false})
  house_number: number;

  @Column({type: 'varchar',length: 100, nullable: false, unique: false})
  city: string;

  @Column({type: 'varchar',length: 2, nullable: false, unique: false})
  state: string;

  @Column({type: 'varchar', length: 150, nullable: true, unique: false})
  complement: string;

  @Column({type:'enum', enum: EStatus, default: EStatus.active})
  status: EStatus;

  @OneToOne(()=> Person, (person: Person) => person.address)
  person: Person;

  @CreateDateColumn({type: 'timestamp', nullable: false, unique: false})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp', nullable: false, unique: false})
  updated_at: Date;
}

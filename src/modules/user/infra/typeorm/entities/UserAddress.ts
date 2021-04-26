import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne
} from 'typeorm';

import Person from './Person';


@Entity('user_adresses')
class UserAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'varchar',length:9,nullable:false,unique:false})
  postal_code:string;

  @Column({type:'varchar',length:100, nullable:false, unique:false})
  street:string;

  @Column({type:'int4', nullable:false,unique:false})
  house_number:number;

  @Column({type:'varchar',length:100, nullable:false, unique:false})
  city:string;

  @Column({type:'varchar',length:2, nullable:false, unique:false})
  state:string;

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp'})
  updated_at: Date;

  @OneToOne(()=> Person, (person:Person) => person.userAddress)
  person:Person;
}

export default UserAddress;
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';

import UserAddress from './UserAddress';

import User from './User';


@Entity('persons')
class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User,(user:User) => user.person)
  user:User;

  @Column({type:'varchar',length:14,nullable:false,unique:true})
  cpf:string;

  @Column({type:'varchar',length:100,nullable:false,unique:true})
  email:string;

  @Column({type:'varchar',length:17,nullable:false,unique:true})
  cellphone:string;

  @Column({type:'varchar',length:30,nullable:false,unique:false})
  first_name:string;

  @Column({type:'varchar',length:100,nullable:false,unique:false})
  last_name:string;

  @Column({type:'date',nullable:false,unique:false})
  birth_date:Date;

  @Column({type:'int',nullable:true})
  address_id:number;

  @OneToOne(() => UserAddress, (userAddress:UserAddress) => userAddress.person, { cascade: true })
  @JoinColumn({name:'address_id'})
  userAddress:UserAddress; 

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp'})
  updated_at: Date;
}

export default Person;
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';

import Person from './Person';

enum Status {
  active = 'active',
  inactive = 'inactive',
  deleted = 'deleted',
}

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int4'})
  person_id: number;

  @OneToOne(() => Person, (person:Person) => person.user,{ cascade:true })
  @JoinColumn({name:'person_id'})
  person:Person;

  @Column({type: 'varchar', length:20, nullable: false, unique: true})
  username: string;

  @Column({type:'varchar',length:120,nullable:false,unique:false})
  password:string;

  @Column({type:'enum', enum:Status,default:Status.active})
  status: Status;

  @Column({type:'int4', nullable:false,unique:false,default:0})
  followers_count:number;

  @Column({type:'int4', nullable:false,unique:false,default:0})
  campaigns_count:number;

  @Column({type:'int4', nullable:false,unique:false,default:0})
  recommendations_count:number;

  @Column({type:'int4', nullable:false,unique:false,default:0})
  experience:number;

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp'})
  updated_at: Date;
}

export default User;
import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, 
  ManyToOne, 
  JoinColumn, 
  OneToOne,
  ManyToMany
} from 'typeorm';

import UserLevel from './UserLevel';
import Person from './Person';
import GenericStatus from '../../../../status/infra/typeorm/GenericStatus';
import { Exclude } from 'class-transformer';
import Follower from './Followers';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Person)
  @JoinColumn()
  personId: number;

  @Column()
  @Exclude()
  password: string;

  @ManyToOne(type => GenericStatus)
  @JoinColumn()
  statusId: string;

  @ManyToOne(type => UserLevel)
  @JoinColumn()
  levelId: number;


  @Column()
  experience: number;

  @Column()
  recommendationsCount: number

  @Column()
  campaignsCount: number

  @Column()
  followersCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default User;

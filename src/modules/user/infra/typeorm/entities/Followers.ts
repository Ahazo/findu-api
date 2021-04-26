import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  Unique,
  JoinTable
} from 'typeorm';
import followersStatus from '../../../../status/infra/typeorm/FollowersStatus';

import User from './User';

@Entity('Followers')
@Unique(["followerId", "followedId"])
class Follower {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(type => User)
  @JoinTable()
  followerId: User[];

  @ManyToMany(type => User)
  @JoinTable()
  followedId: User[];

  @ManyToOne(type => followersStatus)
  @JoinColumn()
  statusId: string;

  @CreateDateColumn ()
  createdAt: number;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Follower;
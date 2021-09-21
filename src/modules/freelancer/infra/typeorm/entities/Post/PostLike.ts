import { EStatus } from '../../../../../../shared/utils/dtos/EStatus';
import User from '../../../../../user/infra/typeorm/entities/User';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Post from './Post';

@Entity('post_like')
export default class PostLike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int4', nullable: false, unique: false})
  post_id: number;

  @ManyToOne(() => Post, (post: Post) => post.postLike)
  @JoinColumn({name: 'post_id'})
  post: number;

  @Column({type: 'int4', nullable: false, unique: false})
  user_id: number;

  @OneToMany(() => User, (user: User) => user.postLike)
  @JoinColumn({name: 'user_id'})
  user: number;

  @Column({type: 'enum', enum: EStatus, default: EStatus.active})
	status: EStatus;
}

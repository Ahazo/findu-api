import { EStatus } from '../../../../../../shared/utils/dtos/EStatus';

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Freelancer from '../Freelancer';
import PostComment from './PostComment';
import PostLike from './PostLike';
import PostMedia from './PostMedia';

@Entity('post')
export default class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => PostComment, (postComment: PostComment) => postComment.post)
  postComment: number;

  @OneToMany(() => PostLike, (postLike: PostLike) => postLike.post)
  postLike: number;

  @OneToOne(() => PostMedia, (postMedia: PostMedia) => postMedia.post)
  postMedia: number;

  @Column({type: 'int4', nullable: false, unique: false})
  freelancer_id: number;

  @ManyToOne(() => Freelancer, (freelancer: Freelancer) => freelancer.post)
  @JoinColumn({name: 'freelancer_id'})
  freelancer: number;

  @Column({type: 'varchar', nullable: false, unique: false})
  content: string;

  @Column({type: 'enum', enum: EStatus, default: EStatus.active})
	status: EStatus;
}

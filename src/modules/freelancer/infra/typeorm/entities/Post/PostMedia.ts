import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EStatus } from '../../../../../../shared/utils/dtos/EStatus';
import Post from './Post';

@Entity('post_media')
export default class PostMedia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int4', nullable: false, unique: false})
  post_id: number;

  @ManyToOne(() => Post, (post: Post) => post.postMedia)
  @JoinColumn({name: 'post_id'})
  post: number;

  @Column({type: 'varchar', nullable: false, unique: true})
  url: string;

  @Column({type: 'enum', enum: EStatus, default: EStatus.active})
	status: EStatus;
}

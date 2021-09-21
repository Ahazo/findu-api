
import Freelancer from '../../../../freelancer/infra/typeorm/entities/Freelancer';
import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import { Entity, PrimaryGeneratedColumn, OneToOne, Column, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import InfluencerLevel from './InfluencerLevel';
import Person from './Person';
import Order from '../../../../order/dtos/infra/typeorm/entities/Order';
import PostRecommendation from './PostRecommendation';
import Recommendation from './Recommendation';
import Follower from './Followers';
import PostComment from '../../../../freelancer/infra/typeorm/entities/Post/PostComment';
import PostLike from '../../../../freelancer/infra/typeorm/entities/Post/PostLike';
import DeliveryAgreement from '../../../../order/dtos/infra/typeorm/entities/DeliveryAgreement';

@Entity('user')
export default class User {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToMany(() => DeliveryAgreement, ( deliveryAgreement: DeliveryAgreement) => deliveryAgreement.user)
	deliveryAgreement: DeliveryAgreement;

	@OneToMany(() => PostComment, (postComment: PostComment) => postComment.user)
	postComment: string;

	@ManyToOne(() => PostLike, (postLike: PostLike) => postLike.user)
	postLike: string;

	@OneToMany(() => Order, (order: Order) => order.user)
  order: number;

	@OneToOne(() => Freelancer, (freelancer: Freelancer) => freelancer.user)
	freelancer: Freelancer;

	@OneToMany(() => PostRecommendation, (postRecommendation: PostRecommendation) => postRecommendation.user)
	postRecommendation: PostRecommendation;

	@OneToMany(() => Recommendation, (recommendation: Recommendation) => recommendation.user)
	recommendation: Recommendation;

	@OneToMany(() => Follower, (follower: Follower) => follower.user_id)
	follower_parent: Follower;

	@OneToMany(() => Follower, (follower: Follower) => follower.followed_user_id)
	follower_child: Follower;

	@Column({type: 'int4', nullable: false, unique: true})
	person_id: number;

	@OneToOne(() => Person, (person: Person) => person.user, { eager: true, cascade: true })
	@JoinColumn({ name: 'person_id'})
	person: Person;

	@Column({type: 'varchar', length: 30, nullable: false, unique: true})
	username: string;

	@Column({type: 'varchar', length: 120, nullable: false, unique: true})
	password: string;

	@Column({type: 'int4', nullable: false, unique: false, default: 0})
	experience: number;

	@Column({type: 'int4', nullable: false, unique: false})
	level_id: number;

	@OneToOne(() => InfluencerLevel, (influencerLevel: InfluencerLevel) => influencerLevel.user, { eager: true })
	@JoinColumn({ name: 'level_id'})
	influencerLevel: InfluencerLevel

	@Column({type: 'int4', nullable: false, unique: true, default: 0})
	follower_count: number;

	@Column({type: 'int4', nullable: false, unique: true, default: 0})
	following_count: number;

	@CreateDateColumn({type: 'timestamp', nullable: false, unique: false})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp', nullable: false, unique: false})
  updated_at: Date;

	@Column({type: 'enum', enum: EStatus, default: EStatus.active})
	status: EStatus;
}

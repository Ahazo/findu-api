import {
	Entity,
	PrimaryGeneratedColumn,
	OneToOne,
	Column,
	JoinColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	ManyToOne,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import Freelancer from '../../../../freelancer/infra/typeorm/entities/Freelancer';
import PostComment from '../../../../freelancer/infra/typeorm/entities/PostComment';
import PostLike from '../../../../freelancer/infra/typeorm/entities/PostLike';
import DeliveryAgreement from '../../../../order/infra/typeorm/entities/DeliveryAgreement';
import Order from '../../../../order/infra/typeorm/entities/Order';
import BannerPhoto from './BannerPhoto';
import Follower from './Followers';
import InfluencerLevel from './InfluencerLevel';
import Person from './Person';
import PostRecommendation from './PostRecommendation';
import ProfilePhoto from './ProfilePhoto';
import Recommendation from './Recommendation';

@Entity('users')
export default class User {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToMany(
		() => DeliveryAgreement,
		(deliveryAgreement: DeliveryAgreement) => deliveryAgreement.user
	)
	deliveryAgreement: DeliveryAgreement;

	@OneToMany(() => PostComment, (postComment: PostComment) => postComment.user)
	postComment: string;

	@OneToMany(
		() => ProfilePhoto,
		(profilePhoto: ProfilePhoto) => profilePhoto.user,
		{
			eager: true,
		}
	)
	profilePhoto: ProfilePhoto;

	@OneToMany(
		() => BannerPhoto,
		(bannerPhoto: BannerPhoto) => bannerPhoto.user,
		{
			eager: true,
		}
	)
	bannerPhoto: BannerPhoto;

	@OneToMany(() => PostLike, (postLike: PostLike) => postLike.user)
	postLike: string;

	@OneToMany(() => Order, (order: Order) => order.user)
	order: number;

	@OneToOne(() => Freelancer, (freelancer: Freelancer) => freelancer.user, {
		eager: true,
	})
	freelancer: Freelancer;

	@OneToMany(
		() => PostRecommendation,
		(postRecommendation: PostRecommendation) => postRecommendation.user
	)
	postRecommendation: PostRecommendation;

	@OneToMany(
		() => Recommendation,
		(recommendation: Recommendation) => recommendation.user
	)
	recommendation: Recommendation;

	@OneToMany(() => Follower, (follower: Follower) => follower.user_id)
	follower_parent: Follower;

	@OneToMany(() => Follower, (follower: Follower) => follower.followed_user_id)
	follower_child: Follower;

	@Column({ type: 'int', nullable: false, unique: true })
	person_id: number;

	@OneToOne(() => Person, (person: Person) => person.user, {
		eager: true,
		cascade: true,
	})
	@JoinColumn({ name: 'person_id' })
	person: Person;

	@Column({ type: 'varchar', length: 30, nullable: false, unique: true })
	username: string;

	@Column({ type: 'varchar', length: 120, nullable: false, unique: false })
	password: string;

	@Column({ type: 'int', nullable: false, unique: false, default: 0 })
	experience: number;

	@Column({ type: 'int', nullable: false, unique: false })
	level_id: number;

	@ManyToOne(
		() => InfluencerLevel,
		(influencerLevel: InfluencerLevel) => influencerLevel.user,
		{ eager: true }
	)
	@JoinColumn({ name: 'level_id' })
	influencerLevel: InfluencerLevel;

	@Column({ type: 'int', nullable: false, unique: false, default: 0 })
	follower_count: number;

	@Column({ type: 'int', nullable: false, unique: false, default: 0 })
	following_count: number;

	@Column({ type: 'int', nullable: false, unique: false, default: 0 })
	projects_count: number;

	@CreateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp', nullable: false, unique: false })
	updated_at: Date;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;
}

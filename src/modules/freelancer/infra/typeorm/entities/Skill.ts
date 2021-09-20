import { EStatus } from "../../../../../shared/utils/dtos/EStatus";
import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Freelancer from "./Freelancer";
import Specialization from './Specialization'

@Entity('skills')
export default class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'int4', nullable: false, unique: false})
	specialization_id: number;

  @ManyToOne(() => Specialization, (specialization: Specialization) => specialization.skill)
  @JoinColumn({name: 'specialization_id'})
  specialization: number;

  @Column({type: 'int4', nullable: false, unique: false})
	freelancer_id: number;

  @ManyToOne(() => Freelancer, (freelancer: Freelancer) => freelancer.skill)
  @JoinColumn({name: 'freelancer_id'})
  freelancer: number;

	@Column({type: 'enum', enum: EStatus, default: EStatus.active})
	status: EStatus;
}

import { EStatus } from "shared/utils/dtos/EStatus";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('recommendations')
export default class Recommendation {
	@PrimaryGeneratedColumn()
	id: number;

  //Fazer Relação
	@Column({type: 'int4', nullable: false, unique: false})
	user_id: number

	//Fazer Relação
	@Column({type: 'int4', nullable: false, unique: false})
	freelancer_id: number

  //Fazer Relação
	@Column({type: 'int4', nullable: false, unique: false})
	reffered_influencer_id: number

  @CreateDateColumn({type: 'timestamp', nullable: false, unique: false})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp', nullable: false, unique: false})
  updated_at: Date;

	@Column({type: 'enum', enum: EStatus, default: EStatus.active})
	status: EStatus;
}

import { EStatus } from "shared/utils/dtos/EStatus";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Area from "./Area";

@Entity('specializations')
export default class Specialization {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({type: 'int4', nullable: false, unique: false})
	area_id: number;

	@OneToOne(() => Area, (area: Area) => area.specialization)
	@JoinColumn({name: 'area_id'})
	area: Area;

	@Column({type: 'varchar', nullable: false, unique: true})
	description: string;

	@Column({type: 'enum', enum: EStatus, default: EStatus.active})
	status: EStatus;
}

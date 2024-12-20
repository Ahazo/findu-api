import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import Address from './Address';
import User from './User';

@Entity('persons')
export default class Person {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 14, nullable: false, unique: true })
	cpf: string;

	@Column({ type: 'varchar', length: 100, nullable: false, unique: true })
	email: string;

	@Column({ type: 'varchar', length: 13, nullable: false, unique: true })
	cellphone_number: string;

	@Column({ type: 'varchar', nullable: false, unique: false })
	first_name: string;

	@Column({ type: 'varchar', nullable: false, unique: false })
	last_name: string;

	@Column({ type: Date, nullable: false, unique: false })
	birth_date: Date;

	@Column({ type: 'int', nullable: false, unique: false })
	address_id: number;

	@OneToOne(() => Address, (address: Address) => address.person, {
		cascade: true,
	})
	@JoinColumn({ name: 'address_id' })
	address: Address;

	@Column({ type: 'enum', enum: EStatus, default: EStatus.active })
	status: EStatus;

	@OneToOne(() => User, (user: User) => user.person_id)
	user: User;

	@CreateDateColumn({ type: 'timestamp' })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp' })
	updated_at: Date;
}

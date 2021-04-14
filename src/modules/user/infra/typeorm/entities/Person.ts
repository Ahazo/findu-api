import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';

import PersonAddress from './PersonAddress';

@Entity('persons')
class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true})
  cpf: number;

  @Column({ unique: true})
  email: string;

  @Column({ unique: true })
  cellphoneNumber: number;

  @Column()
  firstName: string;

  @Column()
  LastName: string;

  @Column()
  birthDate: Date;

  @OneToOne(type => PersonAddress)
  @JoinColumn()
  addressId: number;
}

export default Person;
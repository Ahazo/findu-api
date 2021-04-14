import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';

import User from './User'

@Entity('persons')
class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User)
  @JoinColumn()
  userId: number;

  @Column()
  uri: string;

  @CreateDateColumn()
  date: Date;
}

export default Person;
import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, 
  ManyToOne, 
  JoinColumn, 
  OneToOne
} from 'typeorm';


@Entity('userAddress')
class UserAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  postalCode: number;

  @Column()
  Street: string;

  @Column()
  City: string;

  @Column()
  State: string;

  @Column()
  Number: number;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default UserAddress;

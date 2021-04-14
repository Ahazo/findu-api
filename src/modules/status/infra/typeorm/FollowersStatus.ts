import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('followersStatus')
class followersStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true})
  Description: string
}

export default followersStatus;
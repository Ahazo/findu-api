import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('genericStatus')
class GenericStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true})
  Description: string
}

export default GenericStatus;
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('userLevels')
class UserLevel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  description: string;

  @Column({ unique: true })
  experienceQuantity: number;

  @Column({ unique: true })
  levelNumber: number;
}

export default UserLevel;
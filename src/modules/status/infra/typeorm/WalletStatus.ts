import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('walletStatus')
class WalletStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true})
  Description: string
}

export default WalletStatus;
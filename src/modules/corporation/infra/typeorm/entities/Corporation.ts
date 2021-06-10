
import Establishment from '../../../../establishment/infra/typeorm/entities/Establishment';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';

@Entity('persons')
class Corporation {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Establishment, (establishment: Establishment) => establishment.corporation)
  establishment: Establishment;

  @Column({type:'varchar', nullable:false, unique:true})
  cnpj: string;

  @Column({type:'varchar',length:100,nullable:false,unique:true})
  username: string;

  @Column({type:'varchar',length:100,nullable:false,unique:false})
  password: string;

  @Column({type:'varchar',length:100,nullable:false,unique:true})
  email: string;

  @Column({type:'varchar',length:100,nullable:false,unique:true})
  company_name: string;

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date;

  @UpdateDateColumn({type: 'timestamp'})
  updated_at: Date;
}

export default Corporation;
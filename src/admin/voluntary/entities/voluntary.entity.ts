import {
  CreateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class Voluntary {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'voluntary_id',
  })
  public id?: number;

  @Column()
  public fullname: string;
  @Column()
  public cellphone: string;
  @Column({ unique: true, name: 'email' })
  public email: string;
  @Column()
  public password: string;
  @Column({ type: 'date', nullable: true })
  public birthdate: Date;
  @CreateDateColumn()
  public member_since: Date;
  @Column()
  public city: string;
  @Column()
  public state: string;
}
//Entity responsible for defining the formatting standard to be inserted in the database

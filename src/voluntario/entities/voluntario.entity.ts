import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Voluntario {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'voluntario_id',
  })
  public id?: number;

  @Column()
  public username: string;
  @Column({ unique: true, name: 'email' })
  public email: string;
  @Column()
  public password: string;
  @Column()
  public birth: string;
}

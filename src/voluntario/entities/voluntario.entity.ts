import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Voluntario {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'voluntario_id',
  })
  public id: number;

  @Column()
  public username: string;
  @Column()
  public email: string;
  @Column()
  public password: string;
  @Column()
  public nascimento: string;
}

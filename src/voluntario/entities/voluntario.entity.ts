import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Voluntario {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'voluntario_id',
  })
  id: number;

  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  nascimento: string;
}

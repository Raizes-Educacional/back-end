import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export default class Cycle {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}

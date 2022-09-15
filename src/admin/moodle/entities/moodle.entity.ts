import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export default class Moodle {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}

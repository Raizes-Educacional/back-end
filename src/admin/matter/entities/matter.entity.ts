import {
  OneToOne,
  JoinColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Cycle from 'src/admin/cycle/entities/cycle.entity';
import Moodle from 'src/admin/moodle/entities/moodle.entity';

@Entity()
export default class Matter {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  name: string;
  @OneToOne(() => Cycle)
  @JoinColumn({ name: 'id_cycle', referencedColumnName: 'id' })
  cycle: Cycle;
  @OneToOne(() => Moodle)
  @JoinColumn({ name: 'id_moodle', referencedColumnName: 'id' })
  moodle: Moodle;
}

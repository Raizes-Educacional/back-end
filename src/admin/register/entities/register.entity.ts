import { OneToOne, JoinColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Cycle from 'src/admin/cycle/entities/cycle.entity';
import Student from 'src/client/student/entities/student.entity';

@Entity()
export default class Register {
  @PrimaryGeneratedColumn()
  public id: number;
  @OneToOne(() => Student)
  @JoinColumn({ name: 'id_student', referencedColumnName: 'id' })
  student: Student;
  @OneToOne(() => Cycle)
  @JoinColumn({ name: 'id_cycle', referencedColumnName: 'id' })
  cycle: Cycle;
}

import { OneToOne, JoinColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Register from 'src/admin/register/entities/register.entity';
import Matter from 'src/admin/matter/entities/matter.entity';
import Teacher from 'src/admin/teacher/entities/teacher.entity';

@Entity()
export default class Attendance {
  @PrimaryGeneratedColumn()
  public id: number;
  @OneToOne(() => Register)
  @JoinColumn({ name: 'id_register', referencedColumnName: 'id' })
  register: Register;
  @OneToOne(() => Matter)
  @JoinColumn({ name: 'id_matter', referencedColumnName: 'id' })
  matter: Matter;
  @OneToOne(() => Teacher)
  @JoinColumn({ name: 'id_teacher', referencedColumnName: 'id' })
  teacher: Teacher;
}

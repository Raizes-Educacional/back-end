import { OneToOne, JoinColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Voluntaryy from 'src/admin/voluntary/entities/voluntary.entity';
import Cycle from 'src/admin/cycle/entities/cycle.entity';
import Matter from 'src/admin/matter/entities/matter.entity';

@Entity()
export default class Teacher {
  @PrimaryGeneratedColumn()
  public id: number;
  @OneToOne(() => Voluntaryy)
  @JoinColumn({ name: 'id_voluntario', referencedColumnName: 'voluntario_id' })
  voluntary: Voluntaryy;
  @OneToOne(() => Cycle)
  @JoinColumn({ name: 'id_cycle', referencedColumnName: 'id' })
  cycle: Cycle;
  @OneToOne(() => Matter)
  @JoinColumn({ name: 'id_matter', referencedColumnName: 'id' })
  matter: Matter;
}

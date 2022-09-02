import Student from "../../student/entities/student.entity";
import { Column, PrimaryGeneratedColumn ,Entity, OneToOne, JoinColumn } from "typeorm";

@Entity()
export default class Responsible {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string
    @Column()
    rg: string;
    @Column()
    url_document: string;
    @Column()
    cell_phone: string;
    @Column()
    cell_phone_alternative: string;
    @Column()
    email: string;
    @Column()
    is_responsible_for_transport: boolean;
    @OneToOne(type => Student)
    @JoinColumn({ name: 'id' })
    id_student: Student
}

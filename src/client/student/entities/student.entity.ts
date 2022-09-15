import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  birth: Date;
  @Column()
  has_special_needs: boolean;
  @Column()
  cellphone: string;
  @Column()
  email: string;
  @Column()
  address: string;
  @Column()
  address_number: string;
  @Column()
  zipcode: string;
  @Column()
  complement: string;
  @Column()
  district: string;
  @Column()
  city: string;
  @Column()
  school: string;
  @Column()
  year_shool: string;
  @Column()
  origin: string;
  @Column()
  has_online_disponibility: boolean;
  @Column()
  has_time_disponibility: boolean;
}

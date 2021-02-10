import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CatsEntity {
  @PrimaryGeneratedColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;
}

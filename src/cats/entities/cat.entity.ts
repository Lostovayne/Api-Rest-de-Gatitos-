import { Breed } from 'src/breeds/entities/breed.entity';
import { Column, DeleteDateColumn, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Cat {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Breed, (breed) => breed.id, { eager: true })
  breed: Breed;
}

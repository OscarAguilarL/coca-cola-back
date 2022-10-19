import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  title: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('numeric', { default: 0 })
  price: number;

  @Column('text')
  image_url: string;
}

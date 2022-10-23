import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ContactForm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  email: string;

  @Column('text')
  address: string;

  @Column('text')
  details: string;

  @CreateDateColumn()
  submit_date: string;
}

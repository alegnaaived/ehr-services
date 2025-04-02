import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FieldMapping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ehrSystem: string;

  @Column()
  inputField: string;

  @Column()
  ehrField: string;
}
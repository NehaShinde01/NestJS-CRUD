import { User } from '../users/user';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  note: string;

  @ManyToOne(() => User, (user) => user.assignedTodos)
  assignedTo: User;


}
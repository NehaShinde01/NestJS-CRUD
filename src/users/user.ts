import { Todo } from '../todos/todo';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  mobile: number;

  @OneToMany(() => Todo, (todo) => todo.assignedTo)
  assignedTodos: Todo[];
  // @Column({ default: true })
  // isActive: boolean;
}

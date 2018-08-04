import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import Mandalart from './Mandalart';
import User from './User';
import SubTodo from './SubTodo';

@Entity()
class Todo extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'boolean', default: false })
  isAchieved: boolean;

  @ManyToOne(type => User, user => user.todos)
  user: User;

  @ManyToOne(type => Mandalart, mandalart => mandalart.todos)
  mandalart: Mandalart;

  @OneToMany(type => SubTodo, subTodo => subTodo.todo)
  subTodos: SubTodo[];

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;
}

export default Todo;

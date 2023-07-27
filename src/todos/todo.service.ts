import { Get, Injectable, NotFoundException, Param } from '@nestjs/common';
import { Todo } from './todo';
import { DeleteResult, EntityManager, InsertResult, Like, UpdateResult } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';

// const TODOS: Todo[] = [
//   {
//     id: 1,
//     note: "goto office"
//   },
//   {
//     id: 2,
//     note: "work from office"
//   },
//   {
//     id: 3,
//     note: "reached at thane"
//   },

// ];
@Injectable()
export class TodoService {

  constructor(
    @InjectEntityManager()
    private _entityManager: EntityManager,//entityManager is private thats why we declaire it as _<name>
  ) { }



  /**
   * 
   * @returns display all Todo Array values
   */
  getTodos(): Promise<Todo[]> {
    return this._entityManager.find(Todo);
  }
  /**
   * 
   * @param TodoDetails create new todo list 
   * @returns 
   */

createTodo(TodoDetails: Partial<Todo>): Promise<InsertResult>{

  return this._entityManager.insert(Todo, TodoDetails);
}
  /**
   * get perticular todo item
   */
  getTodo(id: number): Promise<Todo> {
    const todo = this._entityManager.findOne(Todo,{where:{id} });
    if(!todo)
    {
      throw new Error('Note not found');
    }
    return todo;
  }

  updateTodo(id: number, todoDetails: Partial<Todo>): Promise<UpdateResult> {
    return this._entityManager.update(Todo, {id},todoDetails)
     
  }

  searchTodo(query: string): Promise<Todo[]> {
    return this._entityManager.find(Todo, {
      where : { note:Like(`%${query}%`)}
    })
  }

  deleteTodo(id: number): Promise<DeleteResult> {
   return this._entityManager.delete(Todo, id);
  }

  

}


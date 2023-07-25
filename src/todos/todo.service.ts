import { Get, Injectable, NotFoundException, Param } from '@nestjs/common';
import { Todo } from './todo';

const TODOS: Todo[] = [
  {
    id: 1,
    note: "goto office"
  },
  {
    id: 2,
    note: "work from office"
  },
  {
    id: 3,
    note: "reached at thane"
  },

];
@Injectable()
export class TodoService {


  /**
   * 
   * @returns display all Todo Array values
   */
  getTodos(): Todo[] {
    return TODOS;
  }
  /**
   * 
   * @param TodoDetails create new todo list 
   * @returns 
   */

createTodo(TodoDetails: Partial<Todo>): Todo{
  const todo = <Todo>{
    id: TODOS[TODOS.length - 1].id + 1,
    ...TodoDetails,
  };
  TODOS.push(todo);

  return todo;
}
  /**
   * get perticular todo item
   */
  getTodo(id: number): Todo {
    const todo = TODOS.find((todo) => todo.id == id);
    if(!todo)
    {
      throw new Error('Note not found');
    }
    return todo;
  }

  updateTodo(id: number, todoDetails: Partial<Todo>): Todo {
    const index = TODOS.findIndex(todo => todo.id == id);
    TODOS[index]={ ...TODOS[index],...todoDetails};
    return TODOS[index];
  }

  searchTodo(query: string): Todo[] {
    return TODOS.filter((todo)=> todo.id.toString().includes(query) ||
    todo.note.includes(query));
  }

  deleteTodo(id: number): boolean {
    const index=TODOS.findIndex(todo => todo.id==id );
    TODOS.splice(index,1);
    return true;
  }

  

}


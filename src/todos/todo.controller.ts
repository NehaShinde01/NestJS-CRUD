import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }
  
  /**
   * 
   * @returns get all todos
   */
  @Get()
  getTodos(): Promise<Todo[]> {
    return this.todoService.getTodos();
  }

  /**
   * 
   * @param todoDetails get todo details from end user
   * @returns details
   */
  @Post()
  createTodo(@Body() todoDetails: Partial<Todo> ): Promise<InsertResult>{
    return this.todoService.createTodo(todoDetails);
  }

  /**
   * 
   * @param id get perticular user id 
   * @returns 
   */
  @Get(':id')
  getTodo(@Param('id') id:number) : Promise<Todo>{
    return this.todoService.getTodo(id);
  }

  /**
   * 
   * @param id user id from end user
   * @param todoDetails the details from end user
   * @returns updated details
   */
  @Patch(':id')
  updateTodo(@Param('id') id:number, @Body() todoDetails: Partial<Todo>) :Promise<UpdateResult>{
    return this.todoService.updateTodo(id,todoDetails);
  }

  /**
   * 
   * @param id get todo id from end user
   * @returns deleted todo
   */

  @Delete(':id')
  deleteTodo(@Param('id') id:number): Promise<DeleteResult>{
    return this.todoService.deleteTodo(id);
  }

  /**
   * 
   * @param query end users query (id or note) for search
   * @returns search result
   */
  @Get('search/:query')
  searchTodo(@Param('query') query: string): Promise<Todo[]> {
    return this.todoService.searchTodo(query);
  }

  

}


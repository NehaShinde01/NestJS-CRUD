import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }
  
  @Get()
  getTodos(): Todo[] {
    return this.todoService.getTodos();
  }

  /**
   * 
   * @param todoDetails get todo by its id
   * @returns 
   */
  @Post()
  createTodo(@Body() todoDetails: Partial<Todo> ): Todo{
    return this.todoService.createTodo(todoDetails);
  }

  @Get(':id')
  getTodo(@Param('id') id:number) :Todo{
    return this.todoService.getTodo(id);
  }

  @Patch(':id')
  updateTodo(@Param('id') id:number, @Body() todoDetails: Partial<Todo>) :Todo{
    return this.todoService.updateTodo(id,todoDetails);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id:number): boolean{
    return this.todoService.deleteTodo(id);
  }

  @Get('search/:query')
  searchTodo(@Param('query') query: string): Todo[] {
    return this.todoService.searchTodo(query);
  }
}


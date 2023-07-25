import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('/users')
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  @Post('/users')
  createUser(@Body() userDetails: Partial<User>): User {
    return this.appService.createUser(userDetails);
  }

  @Get('/users/:id')
  getUser(@Param('id') id: number): User {
    return this.appService.getUser(id);
  }

  @Patch('/users/:id')
  updateUser(@Param('id') id: number, @Body() userDetails: Partial<User>): User {
    return this.appService.updateUser(id, userDetails);
  }

  @Delete('/users/:id')
  deleteUser(@Param('id') id: number): boolean {
    return this.appService.deleteUser(id);
  }

  @Get('/users/search/:query')
  searchUser(@Param('query') query: string): User[] {
    return this.appService.searchUser(query);
  }
}

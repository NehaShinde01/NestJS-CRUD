import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() userDetails: Partial<User>): User {
    return this.userService.createUser(userDetails);
  }

  @Get(':id')
  getUser(@Param('id') id: number): User {
    return this.userService.getUser(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() userDetails: Partial<User>): User {
    return this.userService.updateUser(id, userDetails);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): boolean {
    return this.userService.deleteUser(id);
  }

  @Get('search/:query')
  searchUser(@Param('query') query: string): User[] {
    return this.userService.searchUser(query);
  }
}

import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }
  /**
   * 
   * @returns all users
   */
  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
  /**
   * 
   * @param userDetails get user details from end user
   * @returns 
   */
  @Post()
  createUser(@Body() userDetails: Partial<User>): Promise<InsertResult> {
    return this.userService.createUser(userDetails);
  }
  /**
   * 
   * @param id get perticular user by id 
   * @returns 
   */
  @Get(':id')
  getUser(@Param('id') id: number): Promise<User> {
    return this.userService.getUser(id);
  }

  /**
   * 
   * @param id update user by id
   * @param userDetails 
   * @returns 
   */
  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() userDetails: Partial<User>): Promise<UpdateResult> {
    return this.userService.updateUser(id, userDetails);
  }

  /**
   * 
   * @param id delete user by id
   * @returns 
   */
  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<DeleteResult> {
    return this.userService.deleteUser(id);
  }

  /**
   * 
   * @param query search user by its id
   * @returns 
   */
  @Get('search/:query')
  searchUser(@Param('query') query: string): Promise<User[]> {
    return this.userService.searchUser(query);
  }
}

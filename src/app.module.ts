import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { TodoController } from './todos/todo.controller';
import { TodoService } from './todos/todo.service';

@Module({
  imports: [],
  controllers: [AppController, UserController,TodoController],
  providers: [AppService, UserService,TodoService],
})
export class AppModule {}

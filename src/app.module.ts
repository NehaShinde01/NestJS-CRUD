import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { TodoController } from './todos/todo.controller';
import { TodoService } from './todos/todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'nestjsdata',
      entities: [User],
      synchronize: true,
      logging:true,//it will show us what query is executed by typeorm
    }),
  ],
  controllers: [AppController, UserController,TodoController],
  providers: [AppService, UserService,TodoService],
})
export class AppModule {}

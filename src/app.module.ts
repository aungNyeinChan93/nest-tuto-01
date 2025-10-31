import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { TodosModule } from './todos/todos.module';
import { BooksModule } from './books/books.module';


@Module({
  imports: [UsersModule, TasksModule, TodosModule, BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

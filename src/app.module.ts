import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { TodosModule } from './todos/todos.module';
import { BooksModule } from './books/books.module';
import { PlayersModule } from './players/players.module';


@Module({
  imports: [UsersModule, TasksModule, TodosModule, BooksModule, PlayersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

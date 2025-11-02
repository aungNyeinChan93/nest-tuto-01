import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { TodosModule } from './todos/todos.module';
import { BooksModule } from './books/books.module';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { CustomersModule } from './customers/customers.module';


@Module({
  imports: [UsersModule, TasksModule, TodosModule, BooksModule, PlayersModule, TeamsModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

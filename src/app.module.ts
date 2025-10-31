import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { TodosModule } from './todos/todos.module';


@Module({
  imports: [UsersModule, TasksModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

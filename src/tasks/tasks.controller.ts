/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Get()
    findAll() {
        return this.tasksService.getAllTasks();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tasksService.getTask(id)
    }
}

/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Get()
    findAll() {
        return this.tasksService.getAllTasks();
    }

    @Get('testQueryParam')
    testQuery(@Query() searchParams?: object) {
        return { searchParams }
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tasksService.getTask(id)
    }

    @Post()
    createTask(@Body() task: object) {
        return this.tasksService.createTask(task);
    }

    @Patch(':id')
    updateTask(@Param('id') id: string) {
        return this.tasksService.updateTask(id)
    }

    @Delete(':id')
    dropTask(@Param('id') id: string) {
        return this.tasksService.dropTask(id)
    }


}

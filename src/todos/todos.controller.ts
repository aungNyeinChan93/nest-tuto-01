/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService) { }

    @Get()
    findAll(@Query() searchParams?: object) {
        return this.todosService.getAllTodos({ ...searchParams });
    }

    @Get('tests/query')
    test(@Query('name') name?: string) {
        return { name }
    }


    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.todosService.getTodoById(id)
    }

    @Post()
    create(@Body() body: { task: string, status: string }) {
        return this.todosService.createTodo(body)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: { status: string }) {
        return this.todosService.editTodo({ ...body, todoId: id })
    }

    @Delete(':id')
    drop(@Param('id') id: string) {
        return this.todosService.deleteTodo(id)
    }


}

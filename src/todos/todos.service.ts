/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
    private todos = [
        { id: 1, task: 'Buy groceries', status: 'pending' },
        { id: 2, task: 'Walk the dog', status: 'done' },
        { id: 3, task: 'Finish project report', status: 'pending' },
        { id: 4, task: 'Call mom', status: 'done' },
        { id: 5, task: 'Pay utility bills', status: 'pending' },
        { id: 6, task: 'Clean the kitchen', status: 'done' },
        { id: 7, task: 'Read TypeScript guide', status: 'pending' },
        { id: 8, task: 'Prepare presentation', status: 'pending' },
        { id: 9, task: 'Exercise 30 minutes', status: 'done' },
        { id: 10, task: 'Plan weekend trip', status: 'pending' }
    ]

    getAllTodos({ status }: { status?: string }) {
        if (status) {
            return this.todos.filter(todo => todo?.status == status)
        }
        return this.todos;
    };

    createTodo(todo: { task: string, status: string }) {
        this.todos.push({ ...todo, id: this.todos.length + 1 })
        return this.todos;
    }

    getTodoById(todoId: string) {
        return this.todos.find(todo => todo?.id == Number(todoId))
    }

    editTodo({ todoId, status }: { todoId: string, status: string }) {
        return this.todos.map(todo => todo?.id == Number(todoId) ? { ...todo, status } : todo)
    }

    deleteTodo(todoId: string) {
        return this.todos.filter(todo => todo?.id !== Number(todoId))
    }

}

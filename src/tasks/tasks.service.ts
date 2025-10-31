/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    getAllTasks() {
        return [
            { id: '1', name: 'Buy groceries', isCompleted: false },
            { id: '2', name: 'Write unit tests', isCompleted: true },
            { id: '3', name: 'Clean workspace', isCompleted: false },
            { id: '4', name: 'Prepare presentation', isCompleted: true },
            { id: '5', name: 'Fix bug #342', isCompleted: false },
            { id: '6', name: 'Update documentation', isCompleted: false },
            { id: '7', name: 'Refactor service layer', isCompleted: true },
            { id: '8', name: 'Plan sprint ', isCompleted: false },
            { id: '9', name: 'Review PRs', isCompleted: true },
            { id: '10', name: 'Deploy to staging', isCompleted: false },
        ]
    };

    getTask(taskId: string) {
        const [task] = this.getAllTasks().filter(task => task.id === taskId);
        return task;
    }

    createTask(task: object) {
        const tasks = [...this.getAllTasks(), { ...task, id: (Number(this.getAllTasks().length) + 1).toString() }]
        return tasks;
    }

    updateTask(taskId: string,) {
        const tasks = this.getAllTasks().map(task => task?.id == taskId ? { ...task, isCompleted: !task?.isCompleted } : task)
        return tasks
    }

    dropTask(taskId: string) {
        const tasks = this.getAllTasks().filter(task => task?.id !== taskId);
        return tasks
    }

}

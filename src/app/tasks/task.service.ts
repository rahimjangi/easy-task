import { Injectable } from '@angular/core';
import { Task } from '../types/task';
import { DUMMYTASKS } from './dummyTasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = DUMMYTASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((t) => t.userId === userId);
  }

  addTaskToUser(task: Task) {
    this.tasks.unshift(task);
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

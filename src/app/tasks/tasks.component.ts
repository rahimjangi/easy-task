import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { User } from '../types/user';
import { TaskComponent } from './task/task.component';
import { Task } from '../types/task';
import { DUMMYTASKS } from './dummyTasks';
import { AddtaskComponent } from './addtask/addtask.component';
import { v4 as uuidv4 } from 'uuid';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, AddtaskComponent],
})
export class TasksComponent {
  constructor(private taskService: TaskService) {}
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  // tasks: Task[] = DUMMYTASKS;
  newTask: boolean = false;
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }
  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }
  addNewTask() {
    this.newTask = true;
  }
  onCancleAddTask() {
    this.newTask = false;
  }
  onTaskAddHandle(task: Task) {
    this.newTask = false;
    task.id = uuidv4();
    // console.log('TASKS:', task);
    this.taskService.addTaskToUser(task);
  }
}

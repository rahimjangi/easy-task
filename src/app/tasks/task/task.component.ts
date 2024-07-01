import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../types/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Input({ required: true }) selectedUserId!: string;
  @Output() complete = new EventEmitter<string>();

  handleComplete() {
    this.complete.emit(this.task.id);
  }
}

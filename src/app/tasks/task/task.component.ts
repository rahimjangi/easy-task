import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../types/task';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
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

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../types/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css',
})
export class AddtaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() submitTask = new EventEmitter<Task>();
  @Output() cancelTask = new EventEmitter();
  task: Task | undefined;
  inputTitle = '';
  inputSummary = '';
  inputDueDate = '';
  onTaskAdd() {
    const task = {
      id: '',
      userId: this.userId,
      title: this.inputTitle,
      summary: this.inputSummary,
      dueDate: this.inputDueDate,
    };
    console.log('ADDTASK', task);
    this.submitTask.emit(task);
  }
  onCancel() {
    this.cancelTask.emit();
  }
}

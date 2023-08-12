import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'src/interfaces/Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  taskService: TaskService = inject(TaskService);

  @Input() task: Task = {
    id: 0,
    description: '',
    date: '',
    isCompleted: false
  };

  removeTask(taskId: number) {
    this.taskService.removeTask(taskId);
  }

  changeTaskStatus(taskId: number, isCompleted: boolean) {
    this.taskService.chageTaskStatus(taskId, isCompleted);
  }

}

import { Component, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from 'src/interfaces/Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  taskIndex: number = 0;
  description: string = '';
  date: string =  new Date().toISOString().slice(0, 10);
  isCompleted: boolean = false;

  taskService: TaskService = inject(TaskService);

  newTask: Task = {
    id: this.taskIndex,
    description: this.description,
    date: this.date,
    isCompleted: this.isCompleted
  }

  addTask() {
    this.taskService.addTask({
      id: this.taskIndex,
      description: this.description,
      date: this.date,
      isCompleted: this.isCompleted
    })
  }
}

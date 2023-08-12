import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { Task } from 'src/interfaces/Task';
import { TaskService } from '../task.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-tasksection',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './tasksection.component.html',
  styleUrls: ['./tasksection.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(200)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(400, style({opacity: 0})))
    ])
  ]
})

export class TasksectionComponent implements OnInit {

  taskService: TaskService = inject(TaskService);
  taskList: Task[] = this.taskService.getTasks();

  ngOnInit() {
    this.taskService.taskList$.subscribe(updatedTasks => {
      this.taskList = updatedTasks;
    });
  }

}


import { Component, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TasksectionComponent } from './tasksection/tasksection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this module
import { Task } from 'src/interfaces/Task';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
  FormComponent, TasksectionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'frontend';
}

import { Injectable } from '@angular/core';
import { Task } from 'src/interfaces/Task';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class TaskService {
	taskId = 0;
	taskList: Task[] = [];
	private taskListSubject = new BehaviorSubject<Task[]>([]);
	taskList$ = this.taskListSubject.asObservable();

	constructor() {
	}

	private updateTaskList() {
		this.taskListSubject.next([...this.taskList]);
	}

	getTasks() {
		this.taskList = [
			{
				id: 25,
				description: "Actividad de ejemplo",
				date: "2020-10-21",
				isCompleted: false,
			},
			{
				id: 22,
				description: "Lorem Ipsum",
				date: "2022-10-21",
				isCompleted: false,
			},
			{
				id: 2,
				description: "consectetur adipiscing elit",
				date: "1999-11-21",
				isCompleted: true,
			},
			{
				id: 32,
				description: "Duis aute irure dolor in reprehenderit in",
				date: "1866-05-15",
				isCompleted: true,
			}
		]
		this.updateTaskList();
		return this.taskList;
	}
	addTask(task: Task) {
		this.taskId += 1;
		task.id = this.taskId;
		this.taskList.unshift(task);
		this.updateTaskList();
	}
	removeTask(taskId: number) {
		this.taskList = this.taskList.filter(task => task.id !== taskId);
		this.updateTaskList();
	}
	chageTaskStatus(taskId: number, isCompleted: boolean) {
		const taskToChangeIndex = this.taskList.findIndex(task => task.id === taskId);

		if (taskToChangeIndex !== -1) {
			const task = this.taskList[taskToChangeIndex];
			this.taskList.splice(taskToChangeIndex, 1);
			task.isCompleted = !isCompleted;

			if (task.isCompleted)
				this.taskList.push(task);
			else
				this.taskList.unshift(task);
		}

		this.updateTaskList();
	}

}

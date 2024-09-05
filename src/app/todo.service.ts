import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private taskArray = [
    { taskName: 'Angular Project', isCompleted: false },
    { taskName: 'React Project', isCompleted: false }
  ];

  getTask() {
    return this.taskArray;
  }

  addTask(taskName: string) {
    this.taskArray.push({
      taskName,
      isCompleted: false
    });
  }

  deleteTask(index: number) {
    this.taskArray.splice(index, 1);
  }

  constructor() { }
}

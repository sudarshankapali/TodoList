import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  userText = '';
  taskArray = [
    {
      taskName: 'Angular Project',
      isCompleted: false
    }, {
      taskName: 'React Project',
      isCompleted: false
    }
  ];
  // constructor(private todoService: TodoService){
  //   this.taskArray = todoService.getTask();
  // }
  showText() {
    this.taskArray.push({
      taskName: this.userText,
      isCompleted: false
    })
  }
  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }
}
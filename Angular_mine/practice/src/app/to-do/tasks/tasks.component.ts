import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  @Input() taskList:Task[]=[]
  @Output() editTask = new EventEmitter();
  @Output() deleteTask = new EventEmitter();


  handleEdit(task:Task){
    this.editTask.emit(task)
  }

  handleDelete(task:Task){
    this.deleteTask.emit(task)
  }

}

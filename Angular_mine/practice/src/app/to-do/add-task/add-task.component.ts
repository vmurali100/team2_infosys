import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private ts: TaskService) {}
  isEdit=false;
  taskList: Task[] = [];
  task:Task={
    userId:'',
    id:'',
    title:'',
    completed:false
  }
  ngOnInit(): void {
    this.getTasks();
  }
  addTask() {
    console.log("TASSSSSK" ,this.task)
    this.ts.addTask(this.task).subscribe((res: any) => {
      alert('Added successfully!');
      this.taskList.push(res);
      
      console.log("ADDDD" , this.taskList)
    });
  }
  updateTask() {
    this.ts.updateTask(this.task).subscribe((res: any) => {
      alert('Updated successfully!');
      this.getTasks();
      this.isEdit = !this.isEdit;
    });
  }
  deleteTask(product: any) {
    this.ts.deleteTask(product).subscribe((res) => {
      alert('Deleted!');
      this.getTasks();
    });
  }

  editTask(task:any){
      console.log('edit', task);
      this.task = JSON.parse(JSON.stringify(task));
      this.isEdit = !this.isEdit;
  }
  getTasks() {
    this.ts.getAllTasks().subscribe((res: any) => {
      console.log('task', res);
      this.taskList = res;
      console.log(this.taskList)
    });
  }
  
}

export interface Task{
    userId?:string,
    id?:any,
    title:string,
    completed:boolean;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../to-do/add-task/add-task.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http:HttpClient) { }
  
  url = 'http://localhost:3000/tasks/';

  getAllTasks(){
    return this._http.get(this.url)
  }
  addTask(task: Task) {
    return this._http.post(this.url, task);
  }
  updateTask(task: Task) {
    return this._http.put(this.url + task.id, task);
  }
  deleteTask(task: Task) {
    return this._http.delete(this.url + task.id);
  }
}

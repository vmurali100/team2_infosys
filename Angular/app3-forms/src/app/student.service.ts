import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student/student.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http:HttpClient) { }

  getAllStudents(){}
  createStudent(student:Student){
    return this._http.post("http://localhost:3000/students",student)
  }
  updateStudent(){}
  deleteStudent(){}
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

export interface Student {
  fname: string;
  lname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  constructor(private studentService:StudentService){}
  studentDetails: Student = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  registerStudent(studentForm: NgForm) {
   this.studentService.createStudent(this.studentDetails).subscribe(response=>{
    console.log("Student Crearted Successfully !!!",response)
    studentForm.reset()
   })
  }
}

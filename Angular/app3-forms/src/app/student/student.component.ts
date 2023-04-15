import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

export interface Student {
  fname: string;
  lname: string;
  email: string;
  password: string;
  confirmPassword: string;
  id?: null;
}
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  students: Student[] = [];
  isEdit: boolean = false;
  constructor(private studentService: StudentService) {}
  studentDetails: Student = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  registerStudent() {
    try {
      this.studentService
        .createStudent(this.studentDetails)
        .subscribe((response) => {
          this.getLatestStudents();
          this.clearForm();
        });
    } catch (error) {
      console.log(error);
    }
  }

  getLatestStudents() {
    this.studentService.getAllStudents().subscribe((response: any) => {
      this.students = response;
    });
  }
  deleteStudentDetails(student: Student) {
    this.studentService.deleteStudent(student).subscribe(() => {
      this.getLatestStudents();
    });
  }
  editStudentDetails(student: Student) {
    this.studentDetails = { ...student };
    this.isEdit = !this.isEdit;
  }
  udpateStudentDetails() {
    this.studentService.updateStudent(this.studentDetails).subscribe((res) => {
      this.getLatestStudents();
      this.isEdit = !this.isEdit;
      this.clearForm();
    });
  }
  clearForm() {
    this.studentDetails = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirmPassword: '',
      id: null,
    };
  }
  ngOnInit() {
    this.getLatestStudents();
  }
}

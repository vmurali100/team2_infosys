import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student/student.component';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
})
export class StudentlistComponent {
  @Output() handleDelete = new EventEmitter();
  @Output() handleEdit = new EventEmitter()
  @Input() allStudents: Student[] = [];

  deleteStudent(user:Student){
    this.handleDelete.emit(user)
  }
  editUser(student:Student){
    this.handleEdit.emit(student)
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Student } from './student/student.component';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private _http: HttpClient) {}

  getAllStudents() {
    return this._http.get('http://localhost:3000/students');
  }
  createStudent(student: Student) {
    return this._http.post('http://localhost:3000/students', student)
    
    // .pipe(catchError(this.errorHandler))
  }
  updateStudent(student:Student) {
    return this._http.put('http://localhost:3000/students/' + student.id,student)
  }
  deleteStudent(student: Student) {
    return this._http.delete('http://localhost:3000/students/' + student.id);
  }
//   errorHandler(error: HttpErrorResponse) {
//     return throwError(error.message || "server error.");
// }
}

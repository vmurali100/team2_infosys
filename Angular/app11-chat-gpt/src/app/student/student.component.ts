import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  helloMesage = 'Some Value Here in Student Component !!';

  sayHello() {
    this.helloMesage = 'Will be changed when you call SayHello !!!';
  }
}

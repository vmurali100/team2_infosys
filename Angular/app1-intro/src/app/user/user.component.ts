import { Component, Input } from '@angular/core';
import { Person } from '../person/person.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() message = ''; // message variable to going receive from Parent
  @Input() childPerson: Person = {
    fname: '',
    lname: '',
    email: '',
  };

  @Input() allUsers: string[] = [];

  @Input() sayhello = (message:any) => {}

}

import { Component } from '@angular/core';

export interface Person {
  fname: string;
  lname: string;
  email: string;
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  myFullName: string = 'Ram Krishna !!';
  person: Person = {
    fname: 'Ravi',
    lname: 'Kumar',
    email: 'ravi@gmail.com',
  };

  persons = ['Ram', 'Sam', 'Kiran', 'Kumar'];

  sayHelloPeson(message:any){
    console.log(message)
  }
}

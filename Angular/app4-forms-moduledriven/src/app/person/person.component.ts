import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export interface Person {
  fname: string;
  lname: string;
  email: string;
  areacode:string;
  phonenumber:string;
}
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  personDetails: FormGroup;
  persons: Person[] = [];
  constructor(private formBuilder: FormBuilder) {
    this.personDetails = this.formBuilder.group({
      fname: '',
      lname: '',
      email: '',
      areacode:'',
      phonenumber:''
    });
  }
  addPerson() {
    console.log(this.personDetails.value);
    this.persons.push({ ...this.personDetails.value });
    this.personDetails.reset()
  }
}

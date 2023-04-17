import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userDetails: FormGroup;
  users:User[]=[]
  constructor(private formBuilder: FormBuilder) {
    this.userDetails = this.formBuilder.group({
      fname: [''],
      lname: [''],
      email: [''],
      areaCode: 0,
      phone: 0,
      event: [''],
      existingUser: [''],
    });
  }

  addUser(){
    console.log(this.userDetails.value);
    this.users.push({ ...this.userDetails.value });
    this.userDetails.reset()
  }
}

export interface User {
  fname: string;
  lname: string;
  email: string;
  areaCode: number;
  phone: number;
  event: string;
  existingUser: string;
}

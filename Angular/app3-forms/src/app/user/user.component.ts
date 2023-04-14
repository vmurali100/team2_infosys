import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users: User[] = [];

  addUser(userForm: NgForm) {
    this.users.push(userForm.value);
    this.clearForm(userForm);
  }

  deleteUserDetails(usr:User){
    this.users = this.users.filter((myUsr)=> myUsr.email !== usr.email)
  } 
  clearForm(userForm: NgForm) {
    userForm.reset();
  }
}

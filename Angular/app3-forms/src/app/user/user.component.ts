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
  users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  myUser: User = {
    firstName: '',
    lastName: '',
    email: '',
  };

  isEdit: boolean = false;
  ngOnInit() {
    localStorage.setItem('users', JSON.stringify([]));
  }
  addUser() {
    this.users.push(this.myUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.clearForm();
  }

  deleteUserDetails(usr: User) {
    this.users = this.users.filter((myUsr) => myUsr.email !== usr.email);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  clearForm() {
    this.myUser = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }

  editUserDetails(usr: User) {
    this.isEdit = !this.isEdit;
    this.myUser = { ...usr };
  }
  updateUser() {
    this.users.forEach((usr, i) => {
      if (usr.email === this.myUser.email) {
        this.users[i] = { ...this.myUser };
      }
    });
    localStorage.setItem('users', JSON.stringify(this.users));
    this.clearForm();
    // userForm.reset()
    this.isEdit = !this.isEdit;
  }
}

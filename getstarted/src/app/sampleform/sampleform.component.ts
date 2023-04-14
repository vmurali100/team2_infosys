import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css'],
})
export class SampleformComponent implements OnInit {
  constructor() {}
  password: string = '';
  cpassword: string = '';
  isEdit: boolean = false;
  user: User = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };
  users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  ngOnInit(): void {
    // this.users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    // localStorage.getItem('users')
    //   ? (this.users = JSON.parse(localStorage.getItem('users') || '[]'))
    //   : (this.users = []);
  }
  addUser() {
    if (this.password === this.cpassword) {
      this.users.push({ ...this.user, password: this.password });
      localStorage.setItem('users', JSON.stringify(this.users));
      this.clearForm();
    } else {
      alert('Password in not matching');
    }
  }

  deleteUserDetails(usr: User) {
    this.users = this.users.filter((myUsr) => myUsr.email !== usr.email);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  clearForm() {
    this.user = {
      fname: '',
      lname: '',
      email: '',
      password: '',
    };
    this.password = '';
    this.cpassword = '';
  }

  editUserDetails(usr: User) {
    this.isEdit = !this.isEdit;
    this.user = { ...usr };
    this.password = usr.password;
    this.cpassword = usr.password;
  }
  updateUser() {
    if (this.password === this.cpassword) {
      this.users.forEach((usr, i) => {
        if (usr.email === this.user.email) {
          this.users[i] = { ...this.user, password: this.password };
        }
      });
      localStorage.setItem('users', JSON.stringify(this.users));
      this.clearForm();
      // userForm.reset()
      this.isEdit = !this.isEdit;
    } else {
      alert('Password is not Matching');
    }
  }
}
export interface User {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

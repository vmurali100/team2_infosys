import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css'],
})
export class SampleformComponent implements OnInit {
  constructor() {}
  user: User = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    cpassword: '',
  };
  users: User[] = [];
  ngOnInit(): void {
    localStorage.getItem('users')
      ? (this.users = JSON.parse(localStorage.getItem('users') || '[]'))
      : (this.users = []);
  }
  addUser() {
    console.log('Add User:', this.user);
    this.users.push(this.user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
export interface User {
  fname: string;
  lname: string;
  email: string;
  password: string;
  cpassword: string;
}

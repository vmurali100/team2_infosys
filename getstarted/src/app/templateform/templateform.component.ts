import { Component, OnInit } from '@angular/core';
import { userInfo } from '../reactiveform/reactiveform.component';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css'],
})
export class TemplateformComponent implements OnInit {
  constructor() {}
  userInfo: userInfo = {
    fname: '',
    lname: '',
    email: '',
    company: '',
    mobile: 0,
  };
  users: userInfo[] = [];
  ngOnInit(): void {}

  register() {
    console.log('form', this.userInfo);
    this.users.push(this.userInfo);
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../sampleform/sampleform.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor() {}

  users: User[] = [];
  ngOnInit(): void {
    localStorage.getItem('users')
      ? (this.users = JSON.parse(localStorage.getItem('users') || '[]'))
      : (this.users = []);
  }
}

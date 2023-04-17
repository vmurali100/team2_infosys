import { Component, Input, OnInit } from '@angular/core';
import { userInfo } from '../reactiveform/reactiveform.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  @Input() userList: userInfo[] = [];
  constructor() {}

  ngOnInit(): void {}
}

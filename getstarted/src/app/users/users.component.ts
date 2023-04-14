import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../sampleform/sampleform.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() newUsers: User[] = [];
  @Output() deleteUser = new EventEmitter();
  @Output() editUser = new EventEmitter();
  handleDelete(usr: User) {
    this.deleteUser.emit(usr);
  }
  handleEdit(usr: User) {
    this.editUser.emit(usr);
  }
}

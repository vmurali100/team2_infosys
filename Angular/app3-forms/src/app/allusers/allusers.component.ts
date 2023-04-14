import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user/user.component';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css'],
})
export class AllusersComponent {
  @Input() newUsers: User[] = [];
  @Output() deleteUser = new EventEmitter()
  handleDelete(usr:User){
    this.deleteUser.emit(usr)
  }
}

import { Component, Input } from '@angular/core';
import { User } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
@Input() userList : User[] =[]
}

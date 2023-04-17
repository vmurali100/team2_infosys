import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../person-template/person-template.component';

@Component({
  selector: 'app-person-template-list',
  templateUrl: './person-template-list.component.html',
  styleUrls: ['./person-template-list.component.css']
})
export class PersonTemplateListComponent {
  @Input() newUsers: User[] = [];
  @Output() deleteUser = new EventEmitter();
  @Output() editUser = new EventEmitter()
  handleDelete(usr:User){
    this.deleteUser.emit(usr)
  }
  handleEdit(usr:User){
    this.editUser.emit(usr)
  }
}

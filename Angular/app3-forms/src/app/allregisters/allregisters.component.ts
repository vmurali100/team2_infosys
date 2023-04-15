import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Register } from '../register/register.component';

@Component({
  selector: 'app-allregisters',
  templateUrl: './allregisters.component.html',
  styleUrls: ['./allregisters.component.css']
})
export class AllregistersComponent {
  @Input() newRegisters: Register[] = [];
  @Output() deleteUser = new EventEmitter();
  @Output() editUser = new EventEmitter()
  handleDelete(usr:Register){
    this.deleteUser.emit(usr)
  }
  handleEdit(usr:Register){
    this.editUser.emit(usr)
  }

}

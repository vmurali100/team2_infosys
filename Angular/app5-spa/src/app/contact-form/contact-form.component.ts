import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  @Input() formName: any;
  @Input() isEdit: boolean;
  @Output() handleadd = new EventEmitter();
  @Output() handleUpdate = new EventEmitter();
  constructor() {
    this.isEdit = false;
  }

  addContact(){
    this.handleadd.emit()
  }
  
  updateContact(){
    this.handleUpdate.emit()
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() allContacts: Contact[] = [];
  @Output() handleDelete = new EventEmitter();
  @Output() handleEdit = new EventEmitter();
  deleteContact(contact: any) {
    this.handleDelete.emit(contact);
  }

  editContact(contact: any) {
    this.handleEdit.emit(contact);
  }
}

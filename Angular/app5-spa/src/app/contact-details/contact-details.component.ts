import { Component, Input } from '@angular/core';
import { Contact } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent {
  @Input() allContacts: Contact[] = [];
  
}

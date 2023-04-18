import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Contact {
  fname: string;
  lname: string;
  email: string;
  password: string;
  id?: number;
}
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private _http: HttpClient) {}

  createContact(contact: Contact) {
    return this._http.post('http://localhost:3000/contacts', contact);
  }
  getAllContacts() {
    return this._http.get('http://localhost:3000/contacts');
  }
  deleteContact(contact: any) {
    return this._http.delete('http://localhost:3000/contacts/' + contact.id);
  }
  updateContact(contact: any) {
    return this._http.put(
      'http://localhost:3000/contacts/' + contact.id,
      contact
    );
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Contact, ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactDetils: FormGroup;
  contacts:Contact[] = []
  constructor(private fromBuilder: FormBuilder,private cs:ContactService) {
    this.contactDetils = this.fromBuilder.group({
      fname: new FormControl('', []),
      lname: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
    });
  }

  addContact() {
    console.log('addContact called !!',this.contactDetils.value);
    this.cs.createContact(this.contactDetils.value).subscribe((res)=>{
      console.log(res)
      this.cs.getAllContacts().subscribe((response:any)=>{
        this.contacts = response
        this.clearForm()

      })
    })
  }

  clearForm(){
    this.contactDetils.reset()
  }
  ngOnInit(){
    this.cs.getAllContacts().subscribe((response:any)=>{
      this.contacts = response
    })
  }
}

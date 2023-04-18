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
  contacts:Contact[] = [];
  isEdit:boolean = false;
  constructor(private fromBuilder: FormBuilder,private cs:ContactService) {
    this.contactDetils = this.fromBuilder.group({
      fname: new FormControl('', []),
      lname: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
      id:new FormControl(null,[])
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
getAllUsers(){
  this.cs.getAllContacts().subscribe((response:any)=>{
    this.contacts = response
  })
}
  deleteUserInfo(contact:any){
    this.cs.deleteContact(contact).subscribe(()=>{
      this.getAllUsers()
    })
  }

  editContact(contact:any){
    this.contactDetils.setValue(contact)
    this.isEdit = !this.isEdit
  }
  ngOnInit(){
    this.getAllUsers()
  }
  updateContact(){
    this.cs.updateContact(this.contactDetils.value).subscribe(response=>{
      this.getAllUsers();
      this.clearForm();
      this.isEdit = !this.isEdit

    })
  }
}

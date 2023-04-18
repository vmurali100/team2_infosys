import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private route:Router){

  }
  showContacts(contacts:string){
    console.log(contacts)
    this.route.navigate([`contact/${contacts}`])
  }
}

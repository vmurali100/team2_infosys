import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-contacts',
  templateUrl: './personal-contacts.component.html',
  styleUrls: ['./personal-contacts.component.css']
})
export class PersonalContactsComponent {
  constructor(private router:Router){

  }
  showPersonal(personal:string){
    this.router.navigate([`contact/personal/${personal}`])
  }
}

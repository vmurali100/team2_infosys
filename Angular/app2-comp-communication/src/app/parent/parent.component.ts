import { Component } from '@angular/core';
import { Person } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  recevieDataFromChild(msg:string){
    console.log(msg)
  }

  recivePerson(person:Person){
    console.log(person)
  }
}

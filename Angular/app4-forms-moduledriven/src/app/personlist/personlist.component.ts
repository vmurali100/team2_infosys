import { Component, Input } from '@angular/core';
import { Person } from '../person/person.component';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent {
  @Input() personDetails:Person[]=[]
}

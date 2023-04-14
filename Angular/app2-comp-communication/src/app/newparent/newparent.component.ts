import { Component } from '@angular/core';

@Component({
  selector: 'app-newparent',
  templateUrl: './newparent.component.html',
  styleUrls: ['./newparent.component.css']
})
export class NewparentComponent {
  greetings ="Hello from New Parent Component !!"

  getMessageFromChild(msg:string){
    console.log(msg)
  }
}

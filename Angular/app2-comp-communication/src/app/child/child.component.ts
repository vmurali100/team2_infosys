import { Component, EventEmitter, Output } from '@angular/core';

export interface Person{
  fname:string;
  lname:string
}
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() sendMessage = new EventEmitter() ;
  @Output() sendPerson = new EventEmitter();
  
  message :string = "Welcome to Angular communications !! - From Child Component";
  person:Person = {
    fname:"ram",
    lname:"krishna"
  }

  sayHello(){}
  sendMessageToParent(){
    console.log("sendMessageToParent Called !!")
    this.sendMessage.emit(this.message)
    this.sendPerson.emit(this.person)
  }
}

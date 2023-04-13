import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() sendMessage = new EventEmitter() 
  message :string = "Welcome to Angular communications !! - From Child Component";

  sendMessageToParent(){
    console.log("sendMessageToParent Called !!")
    this.sendMessage.emit(this.message)
  }
}

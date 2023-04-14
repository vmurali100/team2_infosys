import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-newchild',
  templateUrl: './newchild.component.html',
  styleUrls: ['./newchild.component.css'],
})
export class NewchildComponent {
  // @Input is Called decorator
  // To send Data crom Child to Parent .. We need to Create a Custom event with @Output and Event Emitter Class
  @Output() sendMessage = new EventEmitter(); // Custom event Handler
  @Input() receiveMessage = '';

  sendMessageFromChild() {
    this.sendMessage.emit('Hello Events ... I am a Custom Event !!');
  }
}

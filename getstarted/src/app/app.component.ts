import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'getstarted';
  data: string = '';
  msgFromChild: string = '';
  parentToChild: string = '';
  receivedMsg(msg: string) {
    this.msgFromChild = msg;
  }
  sendToChild() {
    this.parentToChild = this.data;
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() msgEmit = new EventEmitter();

  constructor() {}
  msg = '';
  ngOnInit(): void {}

  send() {
    this.msgEmit.emit(this.msg);
  }
}

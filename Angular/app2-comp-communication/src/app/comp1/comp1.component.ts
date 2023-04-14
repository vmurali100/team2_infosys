import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  constructor(private cs:CommonService){

  }
  comp1Message = "Welcome to Comp1 ."

  sendMessageToComp1(){
    this.cs.getDataFromCmp(this.comp1Message)
  }
}

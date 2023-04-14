import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  // Adding a service as dependency Injection 
  // Creating an instance of a Service which will be accessible in this component
  constructor(private cs:CommonService){

  }
  comp1Message:string = "Welcome to Comp1 ."

  sendMessageToComp1(){
    this.cs.getDataFromCmp(this.comp1Message)
  }
}

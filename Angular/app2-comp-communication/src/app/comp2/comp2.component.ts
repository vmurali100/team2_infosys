import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  messageFromComp1 = "";
  constructor(private cs:CommonService){
    this.cs.receiveAndSendData.subscribe((response:any)=>{
      console.log(response)
      this.messageFromComp1 = response;
    })
  }

}

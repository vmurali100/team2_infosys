import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  receiveAndSendData = new BehaviorSubject('')
  constructor() { }

  getDataFromCmp(message:string){
    this.receiveAndSendData.next(message)
  }
}

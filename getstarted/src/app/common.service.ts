import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
  isoData1 = new BehaviorSubject('');
  isoData2 = new BehaviorSubject('');
}

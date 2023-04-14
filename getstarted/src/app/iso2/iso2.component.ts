import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-iso2',
  templateUrl: './iso2.component.html',
  styleUrls: ['./iso2.component.css'],
})
export class Iso2Component implements OnInit {
  data: string = '';
  data2: string = '';
  constructor(private cs: CommonService) {}

  ngOnInit(): void {
    this.cs.isoData2.subscribe(
      (res) => {
        console.log('res', this.data2);
        this.data2 = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  send() {
    console.log(this.data);
    this.cs.isoData1.next(this.data);
  }
}

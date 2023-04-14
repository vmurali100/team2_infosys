import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-iso1',
  templateUrl: './iso1.component.html',
  styleUrls: ['./iso1.component.css'],
})
export class Iso1Component implements OnInit {
  data: string = '';
  data2: string = '';
  constructor(private cs: CommonService) {}

  ngOnInit(): void {
    this.cs.isoData1.subscribe(
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
    this.cs.isoData2.next(this.data);
  }
}

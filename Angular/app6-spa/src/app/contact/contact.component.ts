import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  allContacts: any = [];
  constructor(private cs: CommonService) {}
  ngOnInit() {
    this.cs.getUsers().subscribe((res) => {
      console.log(res);
      this.allContacts = res
    });
  }
}

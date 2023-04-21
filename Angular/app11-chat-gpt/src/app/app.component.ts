import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app11-chat-gpt';
  myImages: any = [];
  isLoading: any = false;
  constructor(private cs: CommonService) {}
  getAnImage(imageForm: NgForm) {
    this.isLoading=true;
    console.log(imageForm.value);
    this.cs.getImageFromAI(imageForm.value.imageName).subscribe((res: any) => {
      console.log(res);
      this.isLoading=false
      this.myImages = res.data;
    });
  }
}

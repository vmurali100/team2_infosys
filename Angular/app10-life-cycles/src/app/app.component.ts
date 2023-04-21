import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  canShowStudent = true;
  constructor() {
    console.log('I am from Constructor !!');
  }

  ngOnInit() {
    console.log('I am From Ng On Init !!');
  }

  changeValue() {
    this.title = 'Hurrey ... I am Changed now ..';
    this.canShowStudent = false
  }

  ngAfterContentChecked(){
    console.log("ngAfterConentChecked Called Just Now !!!")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit Called Just Now !!!")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit Called Just Now  !!!")
  }

  ngAfterViewChecked (){
    console.log("ngAfterViewChecked Called Just Now !!!")
  }
 
  title = 'app10-life-cycles';
}

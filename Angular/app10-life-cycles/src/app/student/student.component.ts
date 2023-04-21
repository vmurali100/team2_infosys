import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() msg = '';
  ngOnChanges(changes:any){
    console.log(changes)
    console.log("I am From NgOnChanges")
  }

  ngDoCheck(){
    console.log("ngDoCheck :- Some Change Happend !!")
  }
 
  ngOnDestroy(){
    console.log("ngOnDestroy called Just Now !!!!")
  }

  ngOnInit(): void {
    
  }
}

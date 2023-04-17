import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  userDetails:any
  constructor(private route:ActivatedRoute,private cs:CommonService){

  }
  ngOnInit(){
    console.log(this.route.snapshot.params)
    console.log(this.route.params)
    this.route.params.subscribe((res:any)=>{
      this.cs.getSingleUser(res.id).subscribe(singleUser=>{
        this.userDetails = singleUser
      })
    })
  }
}

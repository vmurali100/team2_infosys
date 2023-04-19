import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  userDetails: FormGroup;
  users:User[]=[];
  constructor(private formBuilder: FormBuilder,private cs:CommonService) {
    this.userDetails = this.formBuilder.group({
      fname: new FormControl('', []),
      lname: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
    });
  }

  getAllUsers(){
    this.cs.getAllUsers().subscribe((response:any)=>{
      this.users = response
    })
  }

  registerUser(user:User){
    
  }
}

export interface User{
  fname:string,
  lname:string,
  email:string,
  password:string
}

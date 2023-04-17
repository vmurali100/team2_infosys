import { Component } from '@angular/core';
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  areacode:string;
  phonenumber:string;
}
@Component({
  selector: 'app-person-template',
  templateUrl: './person-template.component.html',
  styleUrls: ['./person-template.component.css']
})
export class PersonTemplateComponent {
  users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  myUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    areacode:'',
    phonenumber:''
  };

  isEdit: boolean = false;
  ngOnInit() {
    localStorage.setItem('users', JSON.stringify([]));
  }
  addUser() {
    this.users.push(this.myUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.clearForm();
  }

  deleteUserDetails(usr: User) {
    this.users = this.users.filter((myUsr) => myUsr.email !== usr.email);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  clearForm() {
    this.myUser = {
      firstName: '',
      lastName: '',
      email: '',
      areacode:'',
      phonenumber:''
    };
  }

  editUserDetails(usr: User) {
    this.isEdit = !this.isEdit;
    this.myUser = { ...usr };
  }
  updateUser() {
    this.users.forEach((usr, i) => {
      if (usr.email === this.myUser.email) {
        this.users[i] = {...this.myUser};
      }
    });
    localStorage.setItem('users', JSON.stringify(this.users));
    this.clearForm();
    this.isEdit = !this.isEdit;
  }
}

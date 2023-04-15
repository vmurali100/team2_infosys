import { Component } from '@angular/core';

export interface Register {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registers: Register[] = JSON.parse(localStorage.getItem('registers') || '{}');

  myRegister: Register = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword:''
  };

  isEdit: boolean = false;
  ngOnInit() {
    localStorage.setItem('registers', JSON.stringify([]));
    
  }
  addUser() {
    this.registers.push(this.myRegister);
    localStorage.setItem('registers', JSON.stringify(this.registers));
    this.clearForm();
  }

  deleteUserDetails(usr: Register) {
    this.registers = this.registers.filter((myUsr) => myUsr.email !== usr.email);
    localStorage.setItem('users', JSON.stringify(this.registers));
  }
  clearForm() {
    this.myRegister = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword:''
    };
  }

  editUserDetails(usr: Register) {
    this.isEdit = !this.isEdit;
    this.myRegister = { ...usr };
  }
  updateUser() {
    this.registers.forEach((usr, i) => {
      if (usr.email === this.myRegister.email) {
        this.registers[i] = {...this.myRegister};
      }
    });
    localStorage.setItem('users', JSON.stringify(this.registers));
    this.clearForm();
    // userForm.reset()
    this.isEdit = !this.isEdit;
  }

}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  registerForm: FormGroup;
  users: userInfo[] = [];
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      fname: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      lname: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      company: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        // Validators.min()
      ]),
    });
  }
  register() {
    console.log(this.registerForm.value);
    this.users.push({ ...this.registerForm.value });
    this.registerForm.reset();
  }
  validateUserfield(fieldname: string) {
    return (
      (this.registerForm.get(fieldname)?.dirty ||
        this.registerForm.get(fieldname)?.touched) &&
      this.registerForm?.get(fieldname)?.invalid
    );
    // console.log('new', this.registerForm.get(fieldname)?.dirty);
  }
  ngOnInit(): void {}
}

export interface userInfo {
  fname: string;
  lname: string;
  email: string;
  company: string;
  mobile: number;
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
export interface Employee {
  fname: string;
  lname: string;
  email: string;
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employeeDetails: FormGroup;
  employees: Employee[] = [];
  constructor(private formBuilder: FormBuilder) {
    this.employeeDetails = this.formBuilder.group({
      fname: new FormControl('', [Validators.required, Validators.minLength(6)]),
      lname: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  addEmployee() {
    console.log(this.employeeDetails.value);
    this.employees.push({ ...this.employeeDetails.value });
    this.employeeDetails.reset()
  }
}

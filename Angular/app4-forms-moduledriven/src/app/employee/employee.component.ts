import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      fname: [''],
      lname: [''],
      email: [''],
    });
  }
  addEmployee() {
    console.log(this.employeeDetails.value);
    this.employees.push({ ...this.employeeDetails.value });
    this.employeeDetails.reset()
  }
}

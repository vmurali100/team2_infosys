import { Component, Input } from '@angular/core';
import { Employee } from '../employee/employee.component';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {
  @Input() employeeDetails:Employee[]=[]
}

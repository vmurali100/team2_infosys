import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PersonComponent } from './person/person.component';
import { PersonlistComponent } from './personlist/personlist.component';
import { PersonTemplateComponent } from './person-template/person-template.component';
import { PersonTemplateListComponent } from './person-template-list/person-template-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeelistComponent,
    PersonComponent,
    PersonlistComponent,
    PersonTemplateComponent,
    PersonTemplateListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

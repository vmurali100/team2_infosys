import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AllusersComponent } from './allusers/allusers.component';
import { RegisterComponent } from './register/register.component';
import { AllregistersComponent } from './allregisters/allregisters.component';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllusersComponent,
    RegisterComponent,
    AllregistersComponent,
    StudentComponent,
    StudentlistComponent,
    ProductComponent,
    ProductlistComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

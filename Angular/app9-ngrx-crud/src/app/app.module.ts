import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './user.reducer'; // Step 2 : 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ users: usersReducer }), // Step 1 . Creating a Store with Help of StoreModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

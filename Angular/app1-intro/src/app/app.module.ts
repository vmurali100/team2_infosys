import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// @NgModule({
//   imports:[],
//   declarations:[]
// })
// export class MyOwnModule{

// }

// What is A Module ... ?
// TO Start An Angular application , at least one Module is Required . - But , this module can have as many as it can 
// TO Start an Angular Module , at least One Component is Required 

// @NgModule({
//   declarations:[AppComponent],
//   imports:[BrowserModule,MyOwnModule],
//   exports:[],
//   bootstrap:[AppComponent]
// })
// export class RandomModule{

// }


// Steps To Create a Module
// 1. Import NgModule from Angular 
// 2. Configure NgModule (declarations,imports, exports ...  )
// 3. Export it 
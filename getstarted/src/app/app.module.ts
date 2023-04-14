import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Iso1Component } from './iso1/iso1.component';
import { Iso2Component } from './iso2/iso2.component';
import { SampleformComponent } from './sampleform/sampleform.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Iso1Component,
    Iso2Component,
    SampleformComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

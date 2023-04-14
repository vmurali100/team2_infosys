import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { Iso1Component } from './iso1/iso1.component';
import { Iso2Component } from './iso2/iso2.component';

@NgModule({
  declarations: [AppComponent, ChildComponent, Iso1Component, Iso2Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { UserComponent } from './user/user.component';

@NgModule({
    imports:[BrowserModule],
    exports:[],
    declarations:[AppComponent,UserComponent,PersonComponent],
    bootstrap:[AppComponent]
})

export class MyCustomModule{

}
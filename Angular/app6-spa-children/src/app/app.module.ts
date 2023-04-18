import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalContactsComponent } from './personal-contacts/personal-contacts.component';
import { OfficialContactsComponent } from './official-contacts/official-contacts.component';
import { CommonContactsComponent } from './common-contacts/common-contacts.component';
import { FriendsComponent } from './friends/friends.component';
import { RelativesComponent } from './relatives/relatives.component';
import { NeiboursComponent } from './neibours/neibours.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PersonalContactsComponent,
    OfficialContactsComponent,
    CommonContactsComponent,
    FriendsComponent,
    RelativesComponent,
    NeiboursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

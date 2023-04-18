import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CommonContactsComponent } from './common-contacts/common-contacts.component';
import { ContactComponent } from './contact/contact.component';
import { FriendsComponent } from './friends/friends.component';
import { HomeComponent } from './home/home.component';
import { NeiboursComponent } from './neibours/neibours.component';
import { OfficialContactsComponent } from './official-contacts/official-contacts.component';
import { PersonalContactsComponent } from './personal-contacts/personal-contacts.component';
import { RelativesComponent } from './relatives/relatives.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {
        path: 'personal',
        component: PersonalContactsComponent,
        children: [
          { path: 'friends', component: FriendsComponent },
          { path: 'neibours', component: NeiboursComponent },
          { path: 'relatives', component: RelativesComponent },
        ],
      },
      { path: 'official', component: OfficialContactsComponent },
      { path: 'common', component: CommonContactsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

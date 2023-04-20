import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactlistComponent } from '../contactlist/contactlist.component';
import { EditComponent } from '../edit/edit.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: '', component: ContactComponent },
  { path: 'editcontact/:id', component: EditComponent },
];
@NgModule({
  declarations: [ContactComponent, EditComponent,ContactFormComponent,ContactDetailsComponent,ContactlistComponent],
  imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class ContactsModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Iso1Component } from './iso1/iso1.component';
import { Iso2Component } from './iso2/iso2.component';
import { SampleformComponent } from './sampleform/sampleform.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { AddpostComponent } from './addpost/addpost.component';
import { PostsComponent } from './posts/posts.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FindTextDirective } from './find-text.directive';
import { SampleDirectiveComponent } from './sample-directive/sample-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Iso1Component,
    Iso2Component,
    SampleformComponent,
    UsersComponent,
    ProductsComponent,
    AddproductComponent,
    AddpostComponent,
    PostsComponent,
    ReactiveformComponent,
    UserlistComponent,
    TemplateformComponent,
    FindTextDirective,
    SampleDirectiveComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}

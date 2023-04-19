import { Component } from '@angular/core';
import { User } from 'src/user.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app8-ngrx-crud';
  users$ = Observable<any>
  constructor(private store:Store){
    console.log(store)
    // this.users$ = store.select('users')
  }
}

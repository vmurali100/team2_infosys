import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from './user.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private store: Store<AppState>) {}

}

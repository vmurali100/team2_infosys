import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app7-ngrx-demo';
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
    console.log(store)
  }
  increment(){

  }
  decrement(){

  }
  reset(){
    
  }
}

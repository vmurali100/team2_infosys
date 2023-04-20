import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private _http: HttpClient) {}
  getUsers(): Observable<Array<User>> {
    return this._http
      .get<any>('http://localhost:3000/users')
      .pipe(map((users) => users || []));
  }
  deleteUser(user: User) {
    return this._http.delete('http://localhost:3000/users/' + user.id);
  }
  addUser(user: User) {
    return this._http.post('http://localhost:3000/users/', user);
  }
  updateUser(user: User) {
    return this._http.put('http://localhost:3000/users/' + user.id, user);
  }
}

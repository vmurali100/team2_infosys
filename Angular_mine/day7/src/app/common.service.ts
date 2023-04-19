import { Injectable } from '@angular/core';
import { User } from './add-user/add-user.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) {}

  createUser(user:User) {
    return this._http.post("http://localhost:3000/users",user)
  }
  getAllUsers() {
    return this._http.get("http://localhost:3000/users")
  }
  deleteUser(contact:any) {
    return this._http.delete("http://localhost:3000/users/"+contact.id)
  }
  updateUser(contact:any) {
    return this._http.put("http://localhost:3000/users/"+contact.id,contact)

  }
}

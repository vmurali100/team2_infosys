import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get('https://jsonplaceholder.typicode.com/users')
  }

  getSingleUser(id:number){
    return this._http.get('https://jsonplaceholder.typicode.com/users/'+id)
  }
}

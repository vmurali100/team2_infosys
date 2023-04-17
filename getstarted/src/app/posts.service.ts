import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './addpost/addpost.component';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private _http: HttpClient) {}
  url = 'http://localhost:9000/Posts/';
  getPosts() {
    return this._http.get(this.url);
  }
  getPostById(id: Number) {
    return this._http.get(this.url + id);
  }
  addPost(post: Post) {
    return this._http.post(this.url, post);
  }
  updatePost(post: Post) {
    return this._http.put(this.url + post.id, post);
  }
  deletePost(post: Post) {
    return this._http.delete(this.url + post.id);
  }
}

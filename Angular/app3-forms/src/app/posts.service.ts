import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './posts/posts.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) { }

  
  getAllPost() {
    return this._http.get('http://localhost:3000/posts');
  }
  createPost(posts: Post) {
    return this._http.post('http://localhost:3000/posts', posts)    
  }
  updatePost(post:Post) {
    return this._http.put('http://localhost:3000/posts/' + post.id,post)
  }
  deletePost(post: Post) {
    return this._http.delete('http://localhost:3000/posts/' + post.id);
  }
}

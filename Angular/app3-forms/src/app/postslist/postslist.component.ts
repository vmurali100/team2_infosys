import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../posts/posts.component';

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.css']
})
export class PostslistComponent {
  @Output() handleDelete = new EventEmitter();
  @Output() handleEdit = new EventEmitter()
  @Input() allPosts: Post[] = [];

  deletePost(post:Post){
    this.handleDelete.emit(post)
  }
  editPost(post:Post){
    this.handleEdit.emit(post)
  }

}

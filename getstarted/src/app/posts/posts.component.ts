import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../addpost/addpost.component';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @Input() newPosts: Post[] = [];
  @Output() deleteProduct = new EventEmitter();
  @Output() editProduct = new EventEmitter();
  constructor(private ps: PostsService) {}
  // productList: post[] = [];
  ngOnInit(): void {}

  handleEdit(post: Post) {
    console.log('handleEdit', post);
    this.editProduct.emit(post);
  }
  handleDelete(post: Post) {
    this.deleteProduct.emit(post);
  }
}

import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
})
export class AddpostComponent implements OnInit {
  constructor(private ps: PostsService) {}

  postList: Post[] = [];
  post: Post = {
    id: 0,
    title: '',
    userId: '',
    body: '',
  };
  isEdit: boolean = false;
  ngOnInit(): void {
    this.getPosts();
  }
  addPost() {
    this.ps.addPost(this.post).subscribe((res: any) => {
      alert('Added successfully!');
      this.postList.push(res);
    });
  }
  updatePost() {
    this.ps.updatePost(this.post).subscribe((res: any) => {
      alert('Updated successfully!');
      this.getPosts();
      this.isEdit = !this.isEdit;
    });
  }
  deletePost(post: any) {
    this.ps.deletePost(post).subscribe((res) => {
      alert('Deleted!');
      this.getPosts();
    });
  }
  editPost(post: any) {
    console.log('edit', post);
    this.post = JSON.parse(JSON.stringify(post));
    this.isEdit = !this.isEdit;
  }
  getPosts() {
    this.ps.getPosts().subscribe((res: any) => {
      console.log('Post', res);
      this.postList = res;
    });
  }
}

export interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

export interface Post{
  userId:string;
  id?:null;
  title:string;
  body:string;
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Post[] = [];
  isEdit: boolean = false;
  constructor(private postService: PostsService) { }
  postDetails: Post = {
    userId:'',
    title: '',
    body:''
  };
  createPost() {
    try {
      this.postService
        .createPost(this.postDetails)
        .subscribe((response) => {
          this.getLatestPosts();
          this.clearForm();
        });
    } catch (error) {
      console.log(error);
    }
  }

  getLatestPosts() {
    this.postService.getAllPost().subscribe((response: any) => {
      this.posts = response;
    });
  }
  deletePostDetails(post: Post) {
    this.postService.deletePost(post).subscribe(() => {
      this.getLatestPosts();
    });
  }
  editPostDetails(post: Post) {
    this.postDetails = { ...post };
    this.isEdit = !this.isEdit;
  }
  udpatePostDetails() {
    this.postService.updatePost(this.postDetails).subscribe((res) => {
      this.getLatestPosts();
      this.isEdit = !this.isEdit;
      this.clearForm();
    });
  }
  clearForm() {
    this.postDetails = {
      userId:'',
      id: null,
      title: '',
      body:''
    };
  }
  ngOnInit() {
    this.getLatestPosts();
  }
}

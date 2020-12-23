import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/posts/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './posts.component.html',
  styleUrls: [ './posts.component.scss' ]
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }
}
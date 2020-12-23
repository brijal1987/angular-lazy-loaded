import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/posts/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostdetailsComponent implements OnInit {

  post: Post = { userId: 0, id: 0, title: '', body: ''};

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.getPost(id);

  }

  getPost(id: any): void {
    this.postService.getPost(id)
      .subscribe(post => this.post = post);
  }

}

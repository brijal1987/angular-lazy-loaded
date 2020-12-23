import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../service/posts/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  post = { id: '' };
  postForm!: FormGroup;
  errorMsg : string = '';
  _post: Post = { userId: 0, id: 0, title: '', body: ''};

  get id() {
    return this.postForm.get('id');
  }

  constructor(private postService: PostService, private router:Router) {
  }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      id: new FormControl(this.post.id, [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ])
    });
  }

  async onSend(): Promise<void> {
    if(this.postForm.valid) {
      const id = this.postForm.get('id')?.value;
      try {
        this.postService.getPost(id).subscribe(data => {

          if(!data || data.title === "" || data.body === "") {
            this.errorMsg = "Title or Body not found";
          } else {
            this.router.navigate([`${'posts/' + id}`]);
          }
          console.log(data);
        },
        error => {
          this.errorMsg = "Post not found";
        });
      } catch (e) {
        this.router.navigate([``]);
      }
    }
  }

  onReset(): void {
    this.errorMsg = '';
    this.postForm.reset();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Post } from '../../models/post';
import { API_URL } from '../../constants';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${API_URL + 'posts'}`).pipe(delay(1000))
  }

  getPost(id: number): Observable<Post>{
   return this.http.get<Post>(`${API_URL + 'posts/' + id}`)
  }
}

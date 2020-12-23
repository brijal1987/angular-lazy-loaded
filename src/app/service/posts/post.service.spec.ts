import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostService } from './post.service';
import { Post } from '../../models/post';
import { API_URL } from '../../constants';

describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });
    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve posts from the API via GET', async () => {
    const dummyPosts: Post[] = [{
        userId: 1,
        id: 1,
        body: 'Http Client',
        title: 'Testing Service'
        }, {
        userId: 2,
        id: 2,
        body: 'Hello World2',
        title: 'Testing Services'
    }];

    service.getPosts()
    .subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne( `${API_URL}posts`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPosts);
  });

  it('be able to retrieve post by ID from the API via GET', async () => {
    const dummyPost: Post = {
      userId: 1,
      id: 1,
      body: 'Http Client',
      title: 'Testing Service'
    };
    service.getPost(1)
    .subscribe(post => {
      expect(post).toEqual(dummyPost);
    });

    const request = httpMock.expectOne( `${API_URL}posts/1`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPost);
  });

});

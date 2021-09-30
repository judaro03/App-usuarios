import { Post } from './../interfaces/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  api = 'https://jsonplaceholder.typicode.com';
  getAllPosts() {
    const path = `${this.api}/posts`;
    return this.http.get<Post[]>(path);
  }

  getPost(id: string) {
    const path = `${this.api}/posts/${id}`;
    return this.http.get<Post>(path);
  }

  createPost(post: Post) {
    const path = `${this.api}/posts/`;
    return this.http.post(path, post);
  }

  updatePost(post: Post) {
    const path = `${this.api}/posts/${post.id}`;
    return this.http.put(path, post);
  }
  deletePost(id: string) {
    const path = `${this.api}/posts/${id}`;
    return this.http.delete(path);
  }
}

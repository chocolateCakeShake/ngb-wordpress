import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Posts } from "../interfaces/posts.interface";
import { BehaviorSubject, lastValueFrom, Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrls = {
    posts: '/wp-json/wp/v2/posts',
  }

  posts = new BehaviorSubject<Posts[]>([]);

  constructor(
    private httpClient: HttpClient,
  ) { }

  async init() {
    await lastValueFrom(this.getPosts());
  }

  getPosts(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(`${environment.wpUrl}${this.apiUrls.posts}`).pipe(
      tap((posts) => {
        this.posts.next(posts);
      }),
    );
  }

  getPostBySlug(slug: string): Posts {
    return this.posts.getValue().find((post) => post.slug === slug)!;
  }


}

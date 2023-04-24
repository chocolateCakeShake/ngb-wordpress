import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Posts } from "../interfaces/posts.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrls = {
    posts: '/wp-json/wp/v2/posts',
  }

  constructor(
    private httpClient: HttpClient,
  ) { }


  getPosts(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(`${environment.wpUrl}${this.apiUrls.posts}`);
  }


}

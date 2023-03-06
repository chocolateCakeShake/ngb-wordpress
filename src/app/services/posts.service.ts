import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrls = {
    posts: '/wp/v2/posts',
  }

  constructor(
    private httpClient: HttpClient,
  ) { }


  getPosts() {
    return this.httpClient.get(`${environment.wpUrl}${this.apiUrls.posts}`, {

    });
  }


}

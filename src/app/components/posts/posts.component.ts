import { Component, OnInit } from "@angular/core";
import { PostsService } from "../../services/posts.service";
import { Posts } from "../../interfaces/posts.interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Posts[] = [];

  constructor(
    private postsService: PostsService,
  ) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (err) => {},
    });
  }
}

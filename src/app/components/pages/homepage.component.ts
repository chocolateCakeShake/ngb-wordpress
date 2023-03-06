import { Component, OnInit } from "@angular/core";
import { PostsService } from "../../services/posts.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  posts: any;

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {

    this.postsService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
    });

  }


}

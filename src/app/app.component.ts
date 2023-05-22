import { Component, OnInit } from "@angular/core";
import { PostsService } from "./services/posts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'ngb-wordpress';

  constructor(
    private postsService: PostsService,
  ) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe();
    this.onThemeChange('dark')

  }

  onThemeChange(theme: 'light' | 'dark') {
    if(theme === 'dark') {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }

  }
}

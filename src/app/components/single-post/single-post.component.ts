import { Component, OnInit } from "@angular/core";
import { PostsService } from "../../services/posts.service";
import { ActivatedRoute } from "@angular/router";
import { Posts } from "../../interfaces/posts.interface";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post: Posts | undefined;
  content: SafeHtml | undefined;
  title: SafeHtml | undefined;

  constructor(
    private postsService: PostsService,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.params["id"];

    this.postsService.posts.subscribe((posts) => {
      this.post = this.postsService.getPostBySlug(slug);

      this.content = this.domSanitizer.bypassSecurityTrustHtml(this.post.content.rendered);
      this.title = this.domSanitizer.bypassSecurityTrustHtml(this.post.title.rendered);
    });
  }
}

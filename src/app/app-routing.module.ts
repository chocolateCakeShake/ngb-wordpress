import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from "./components/pages/homepage.component";
import { PostsComponent } from "./components/posts/posts.component";
import { SinglePostComponent } from "./components/single-post/single-post.component";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: ':id',
    component: SinglePostComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

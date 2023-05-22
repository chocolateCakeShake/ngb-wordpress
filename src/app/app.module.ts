import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SinglePostComponent } from "./components/single-post/single-post.component";
import { HomepageComponent } from "./components/pages/homepage.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/posts/posts.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, SinglePostComponent, HomepageComponent, HeaderComponent, PostsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

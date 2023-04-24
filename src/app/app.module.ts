import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SinglePostComponent } from "./components/single-post/single-post.component";
import { HomepageComponent } from "./components/pages/homepage.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, SinglePostComponent, HomepageComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

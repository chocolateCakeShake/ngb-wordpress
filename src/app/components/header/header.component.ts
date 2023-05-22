import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output()
  modeChanged = new EventEmitter<'light' | 'dark'>();

  darkMode = true;

  navItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about'},
    { label: 'Contact', link: '/contact'},
    { label: 'Latest', link: '/posts'},
  ];
}

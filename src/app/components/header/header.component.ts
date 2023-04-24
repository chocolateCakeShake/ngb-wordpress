import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about'},
    { label: 'Contact', link: '/contact'},
  ];
}

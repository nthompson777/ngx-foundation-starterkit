import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  appTitle = 'Your App Name';
  list: any;
  selected: any;
  isOffcanvas = true;

  @Input() public hasSideNav: boolean;

  // Main Nav Links Array
  constructor() {
    this.list = [''];
  }

  select(item) {
    this.selected = item;
  }

  isActive(item) {
    return this.selected === item;
  }
}

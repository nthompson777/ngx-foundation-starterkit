import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  demoPage: any;  // Remove after starting project

  constructor() {
    // Remove after starting project
    this.demoPage = ['demo'];
  }

  ngOnInit() {
  }
}

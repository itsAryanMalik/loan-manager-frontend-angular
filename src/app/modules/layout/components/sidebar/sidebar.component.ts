import { Component, OnInit } from '@angular/core';

interface LINKS {
  name: string;
  path: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  links: LINKS[] = [];
  constructor() {}

  ngOnInit(): void {}
}

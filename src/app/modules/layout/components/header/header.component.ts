import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('drawer') drawer: any;
  matCentered: boolean = true;
  matUnbounded: boolean = true;
  matRadius: number = 25;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  doLogout() {
    localStorage.removeItem('isAuthenticated');
    this.router.navigateByUrl('/auth/login');
  }
}

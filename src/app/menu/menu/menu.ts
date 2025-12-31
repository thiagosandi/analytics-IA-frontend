import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class MenuComponent {

  constructor(private router: Router) {}

  logout(): void {
    // limpar token, session, etc
    this.router.navigate(['/login']);
  }
}

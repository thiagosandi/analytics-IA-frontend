import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthFacade } from '../auth/facade/auth.facade';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  imports: [
    RouterModule,
    MatIconModule
  ],
  styleUrls: ['./menu.scss']
})
export class MenuComponent {
 
  constructor(
    private router: Router,
    public authFacade: AuthFacade
  ) {}


  logout(): void {
    // limpar token, session, etc
    this.authFacade.logout();
    this.router.navigate(['/login']);
  }
}

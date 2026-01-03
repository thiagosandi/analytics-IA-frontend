import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
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
    public authService: AuthService
  ) {}


  logout(): void {
    // limpar token, session, etc
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

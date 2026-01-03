import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  imports: [RouterModule],
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

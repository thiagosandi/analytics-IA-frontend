import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd  } from '@angular/router';
import { MenuComponent } from './components/menu/menu';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-standalone-task-manager');

  showMenu = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const hiddenRoutes = ['/login', '/registrar'];

        this.showMenu = !hiddenRoutes.some(route =>
          event.urlAfterRedirects.startsWith(route)
        );
      });
  }
}

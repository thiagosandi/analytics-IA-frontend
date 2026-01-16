import { Component, computed, inject, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HomeService } from './services/home.service';
import { Todo } from './models/todo.model';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class HomeComponent  {

  public homeService = inject(HomeService);
  public authService = inject(AuthService)

  todosTeste = toSignal(this.homeService.getTodos(), { initialValue: [] });

  ngOnInit() {
    console.log(this.todosTeste());
  }
}

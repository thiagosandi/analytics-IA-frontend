import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-tips',
  imports: [
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    DatePipe,
    DecimalPipe
  ],
  templateUrl: './tips.html',
  styleUrl: './tips.scss',
})
export class TipsComponent {

  public authService = inject(AuthService);

  date = new Date();

  tips = this.authService.finalName();

  constructor() {
    this.timerId = setInterval(() => {
      this.currentTime.set(this.formatTime(new Date()));
    }, 1000);
  }
  

  
  menosGols = [
    { league: 'Brasileirão', homeTeam: 'Atletico MG', awayTeam: 'Cruzeiro MG', type: 'Under 4.0', currentOdd: 1.80, odd: 1.80, time: '45:23', overUnder: true },
    { league: 'Premier League', homeTeam: 'Chelsea', awayTeam: 'Arsenal', type: 'Under 3.5', currentOdd: 1.80, odd: 1.60, time: '38:10', overUnder: true },
    { league: 'Premier League', homeTeam: 'Chelsea', awayTeam: 'Arsenal', type: 'Under 3.5', currentOdd: 1.80, odd: 1.60, time: '38:10', overUnder: true },
    { league: 'Premier League', homeTeam: 'Chelsea', awayTeam: 'Arsenal', type: 'Arsenal -0.5', currentOdd: 1.80, odd: 1.60, time: '38:10', overUnder: false },
     { league: 'Premier League', homeTeam: 'Chelsea', awayTeam: 'Arsenal', type: 'Chelsea +0.5', currentOdd: 1.80, odd: 1.60, time: '38:10', overUnder: false },
    // mais bets
  ];

  maisGols = [
    { league: 'Brasileirão', homeTeam: 'Flamengo', awayTeam: 'Palmeiras', type: 'Over 3.0', currentOdd: 1.80, odd: 1.75, time: '12:05' },
    { league: 'Brasileirão', homeTeam: 'Flamengo', awayTeam: 'Palmeiras', type: 'Over 3.0', currentOdd: 1.80, odd: 1.75, time: '12:05' },
    { league: 'Brasileirão', homeTeam: 'Flamengo', awayTeam: 'Palmeiras', type: 'Over 3.0', currentOdd: 1.80, odd: 1.75, time: '12:05' },
   
    // mais bets
  ];

  handicapPositivo = [
    { league: 'Serie A', homeTeam: 'Juventus', awayTeam: 'AC Milan', type: '+1.0', currentOdd: 1.80, odd: 1.90, time: '22:40' },
    { league: 'Serie A', homeTeam: 'Juventus', awayTeam: 'AC Milan', type: '+1.0', currentOdd: 1.80, odd: 1.90, time: '22:40' },
    { league: 'Serie A', homeTeam: 'Juventus', awayTeam: 'AC Milan', type: '+1.0', currentOdd: 1.80, odd: 1.90, time: '22:40' },

    // mais bets
  ];

  handicapNegativo = [
    { league: 'La Liga', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', type: '-1.0', currentOdd: 1.80, odd: 2.00, time: '10:15' },
    { league: 'La Liga', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', type: '-1.0', currentOdd: 1.80, odd: 2.00, time: '10:15' },
    { league: 'La Liga', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', type: '-1.0', currentOdd: 1.80, odd: 2.00, time: '10:15' },
    // mais bets
  ];

  private timerId: any;

  currentTime = signal(this.formatTime(new Date()));

  private formatTime(date: Date): string {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }
}

import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { GoogleChartsModule } from 'angular-google-charts';
import { ChartType } from 'angular-google-charts';


import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    GoogleChartsModule,
    MatCardModule,
    MatGridListModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class HomeComponent  {

  // Tipos de gráfico
  lineChartType = ChartType.LineChart;
  barChartType = ChartType.BarChart;
  pieChartType = ChartType.PieChart;
  areaChartType = ChartType.AreaChart;

// Line Chart
  lineChartColumns = ['Mês', 'Usuários'];
  lineChartData = [
    ['Jan', 200],
    ['Fev', 400],
    ['Mar', 650],
    ['Abr', 800]
  ];
  lineChartOptions = {
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  // Bar Chart
  barChartColumns = ['Dia', 'Acessos'];
  barChartData = [
    ['Seg', 120],
    ['Ter', 180],
    ['Qua', 150],
    ['Qui', 220]
  ];
  barChartOptions = {
    legend: { position: 'none' }
  };

  // Pie Chart
  pieChartColumns = ['Dispositivo', 'Usuários'];
  pieChartData = [
    ['Desktop', 60],
    ['Mobile', 30],
    ['Tablet', 10]
  ];
  pieChartOptions = {
    pieHole: 0.4
  };

  // Area Chart
  areaChartColumns = ['Mês', 'Performance'];
  areaChartData = [
    ['Jan', 300],
    ['Fev', 500],
    ['Mar', 700],
    ['Abr', 900]
  ];
  areaChartOptions = {
    legend: { position: 'bottom' }
  };
}

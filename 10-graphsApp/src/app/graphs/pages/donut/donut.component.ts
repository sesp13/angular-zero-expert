import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [],
})
export class DonutComponent {
  public colors: string[] = ['#FFB20A', '#E8351E', '#FF722F'];

  // Doughnut config
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100], backgroundColor: this.colors },
      { data: [50, 150, 120], backgroundColor: this.colors },
      { data: [250, 130, 70], backgroundColor: this.colors },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}

import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraphsService } from '../../services/graphs.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styles: [],
})
export class DonutHttpComponent implements OnInit {
  public colors: string[] = [
    '#174AE8',
    '#009DFF',
    '#0CE5E8',
    '#2BFFAD',
    '#4024FF',
  ];

  // Doughnut config
  public doughnutChartLabels!: string[];

  public doughnutChartData!: ChartData<'doughnut'>;
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graphsService: GraphsService) {}

  ngOnInit(): void {
    // this.way1();
    this.way2();
  }

  // A way to init the donut
  way1() {
    this.graphsService.getSocialMediaUsers().subscribe((data) => {
      const labels = Object.keys(data);
      const values: any = Object.values(data);
      this.initGraph(labels, values);
    });
  }

  // Another way to get the data using rxjs operators
  way2() {
    this.graphsService
      .getSocialMediaUsersRxjs()
      .subscribe(({ labels, values }) => {
        this.initGraph(labels, values);
      });
  }

  initGraph(labels: string[], values: any) {
    this.doughnutChartLabels = labels;
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: values,
          backgroundColor: this.colors,
        },
      ],
    };
  }
}

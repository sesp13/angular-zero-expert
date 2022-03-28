import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartConfiguration,
  ChartData,
  ChartDataset,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styles: [],
})
export class BarGraphComponent implements OnInit {
  @Input() horizontal: boolean = false;
  @Input() labels: string[] = [];
  @Input() datasets: ChartDataset<any>[] = [];

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  public barChartOptions: ChartConfiguration['options'];
  public barChartType!: ChartType;
  public barChartData!: ChartData<'bar'>;

  constructor() {}

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    // Declare data for the chart
    this.barChartOptions = {
      responsive: true,
    };
    this.barChartType = 'bar';
    this.barChartData = {
      labels: this.labels,
      datasets: this.datasets,
    };
    // Control horizontal
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
    }
  }
}

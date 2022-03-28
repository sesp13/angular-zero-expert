import { Component, OnInit } from '@angular/core';
import { ChartDataset } from 'chart.js';
@Component({
  selector: 'app-double-bar',
  templateUrl: './double-bar.component.html',
  styles: [],
})
export class DoubleBarComponent implements OnInit {
  
  providersData: ChartDataset[] = [
    { data: [100, 200, 300, 400, 500], label: 'Vendedor A' },
    { data: [50, 250, 30, 450, 200], label: 'Vendedor B' },
  ];

  providersLabels: string[] = ['2021', '2022', '2023', '2024', '2025'];

  productsData: ChartDataset[] = [
    {
      data: [200, 300, 400, 300, 100],
      label: 'Carros',
      backgroundColor: 'blue',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

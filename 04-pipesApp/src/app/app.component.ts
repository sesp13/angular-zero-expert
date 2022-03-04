import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  name: string = 'SaNtIaGo';
  value: number = 1000;
  obj = {
    name: 'Santiago',
  };

  constructor(private primeNgConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
  }

  showName() {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }
}

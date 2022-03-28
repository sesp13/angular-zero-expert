import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { GraphsRoutingModule } from './graphs-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarComponent } from './pages/double-bar/double-bar.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';

@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarComponent,
    DonutComponent,
    DonutHttpComponent,
    BarGraphComponent,
  ],
  imports: [CommonModule, GraphsRoutingModule, NgChartsModule],
})
export class GraphsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './pages/map/map.component';
import { MapsRoutingModule } from './maps-routing.module';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, MapsRoutingModule],
})
export class MapsModule {}

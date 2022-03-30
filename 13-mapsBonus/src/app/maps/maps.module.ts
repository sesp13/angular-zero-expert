import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './pages/map/map.component';
import { MapsRoutingModule } from './maps-routing.module';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [MapComponent, MapViewComponent, LoadingComponent],
  imports: [CommonModule, MapsRoutingModule],
})
export class MapsModule {}

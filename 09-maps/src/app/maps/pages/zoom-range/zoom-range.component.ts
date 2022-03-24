import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.scss'],
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') mapDiv?: ElementRef;
  map?: mapboxgl.Map;
  zoomLevel?: number = 16;
  center: [number, number] = [-75.59135456031214, 6.165118441365262];

  get mapZoom(): number {
    return this.map?.getZoom() ?? 0;
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.mapDiv?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    this.map.on('zoom', (e) => {
      this.zoomLevel = this.mapZoom;
    });

    this.map.on('zoomend', (e) => {
      if (this.mapZoom > 18) {
        this.map?.setZoom(18);
      }
    });

    // Maps movemets
    this.map.on('move', (e) => {
      const { lng, lat } = e.target.getCenter();
      this.center = [lng, lat];
    });
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  changeZoom(zoom: string) {
    this.map?.zoomTo(Number(zoom));
  }

  ngOnDestroy(): void {
    this.map?.off('zoom', () => {});
    this.map?.off('zoomend', () => {});
    this.map?.off('move', () => {});
  }
}

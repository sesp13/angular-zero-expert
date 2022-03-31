import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import mapboxgl from 'mapbox-gl';

// Set mapbox token
mapboxgl.accessToken = environment.maboxtoken;

if (!navigator.geolocation) {
  alert('Geolocalization not supported');
  throw new Error('Geolocalization not supported');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

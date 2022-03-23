import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'maps',
    loadChildren: () =>
      import('./maps/maps.module').then((module) => module.MapsModule),
  },
  {
    path: '**',
    redirectTo: 'maps',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectorComponent } from './pages/selector/selector.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'selector',
        component: SelectorComponent,
      },
      {
        path: '**',
        redirectTo: 'selector',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}

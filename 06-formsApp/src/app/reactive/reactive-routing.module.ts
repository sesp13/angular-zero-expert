import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicsComponent } from './basics/basics.component';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basics',
        component: BasicsComponent,
      },
      {
        path: 'dynamics',
        component: DynamicsComponent,
      },
      {
        path: 'switches',
        component: SwitchesComponent,
      },
      {
        path: '**',
        redirectTo: 'basics',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ReactiveRoutingModule {}

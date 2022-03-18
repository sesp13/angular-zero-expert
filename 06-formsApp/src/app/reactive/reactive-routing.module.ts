import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicsComponent } from './pages/basics/basics.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';
import { SwitchesComponent } from './pages/switches/switches.component';

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

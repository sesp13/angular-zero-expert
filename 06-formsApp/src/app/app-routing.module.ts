import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () =>
      import('./reactive/reactive.module').then(
        (module) => module.ReactiveModule
      ),
  },
  {
    path: 'template',
    loadChildren: () =>
      import('./template/template.module').then(
        (module) => module.TemplateModule
      ),
  },
  {
    path: '**',
    redirectTo: 'template'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

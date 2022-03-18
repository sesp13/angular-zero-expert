import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';

import { BasicsComponent } from './pages/basics/basics.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';
import { SwitchesComponent } from './pages/switches/switches.component';

@NgModule({
  declarations: [BasicsComponent, DynamicsComponent, SwitchesComponent],
  imports: [CommonModule, ReactiveRoutingModule, ReactiveFormsModule],
})
export class ReactiveModule {}

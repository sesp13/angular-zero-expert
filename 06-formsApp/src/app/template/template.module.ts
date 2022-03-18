import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { TemplateRoutingModule } from './template-routing.module';
import { FormsModule } from '@angular/forms';

// Directives

// Components
import { BasicsComponent } from './pages/basics/basics.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';
import { SwitchesComponent } from './pages/switches/switches.component';
import { CustomMinDirective } from './directives/custom-min.directive';

@NgModule({
  declarations: [
    BasicsComponent,
    CustomMinDirective,
    DynamicsComponent,
    SwitchesComponent,
  ],
  imports: [CommonModule, TemplateRoutingModule, FormsModule],
})
export class TemplateModule {}

import { NgModule } from '@angular/core';

// Prime Ng
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';

// This module only groups all the PrimeNg modules used
@NgModule({
  exports: [ButtonModule, CardModule, MenubarModule, FieldsetModule],
})
export class PrimeNgModule {}

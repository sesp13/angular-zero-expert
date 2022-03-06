import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// Custom Pipes
import { FliesPipe } from './pipes/flies.pipe';
import { MyUpperCasePipe } from './pipes/myUpperCase.pipe';
import { OrderPipe } from './pipes/order.pipe';

// Components
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';

@NgModule({
  declarations: [
    BasicsComponent,
    FliesPipe,
    MyUpperCasePipe,
    NoCommonComponent,
    NumbersComponent,
    OrderComponent,
    OrderPipe,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    BasicsComponent,
    NoCommonComponent,
    NumbersComponent,
    OrderComponent,
  ],
})
export class SalesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';

@NgModule({
  declarations: [
    BasicsComponent,
    NoCommonComponent,
    NumbersComponent,
    OrderComponent,
  ],
  imports: [CommonModule],
  exports: [
    BasicsComponent,
    NoCommonComponent,
    NumbersComponent,
    OrderComponent,
  ],
})
export class SalesModule {}

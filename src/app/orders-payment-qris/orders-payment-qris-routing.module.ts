import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersPaymentQrisPage } from './orders-payment-qris.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersPaymentQrisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersPaymentQrisPageRoutingModule {}

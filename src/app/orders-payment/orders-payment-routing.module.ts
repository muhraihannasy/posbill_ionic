import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersPaymentPage } from './orders-payment.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersPaymentPageRoutingModule {}

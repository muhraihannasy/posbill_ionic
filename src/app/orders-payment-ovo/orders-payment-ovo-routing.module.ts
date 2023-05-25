import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersPaymentOvoPage } from './orders-payment-ovo.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersPaymentOvoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersPaymentOvoPageRoutingModule {}

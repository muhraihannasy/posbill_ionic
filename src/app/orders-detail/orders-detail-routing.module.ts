import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersDetailPage } from './orders-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersDetailPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersEditPage } from './orders-edit.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersEditPageRoutingModule {}

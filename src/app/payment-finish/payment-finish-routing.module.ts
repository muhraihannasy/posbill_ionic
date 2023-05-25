import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentFinishPage } from './payment-finish.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentFinishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentFinishPageRoutingModule {}

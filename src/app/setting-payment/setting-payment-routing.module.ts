import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingPaymentPage } from './setting-payment.page';

const routes: Routes = [
  {
    path: '',
    component: SettingPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingPaymentPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingDiscountPage } from './setting-discount.page';

const routes: Routes = [
  {
    path: '',
    component: SettingDiscountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingDiscountPageRoutingModule {}

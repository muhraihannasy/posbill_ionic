import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingOrderTypePage } from './setting-order-type.page';

const routes: Routes = [
  {
    path: '',
    component: SettingOrderTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingOrderTypePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingOlshopPage } from './setting-olshop.page';

const routes: Routes = [
  {
    path: '',
    component: SettingOlshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingOlshopPageRoutingModule {}

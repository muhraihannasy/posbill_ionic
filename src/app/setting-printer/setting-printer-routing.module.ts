import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingPrinterPage } from './setting-printer.page';

const routes: Routes = [
  {
    path: '',
    component: SettingPrinterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingPrinterPageRoutingModule {}

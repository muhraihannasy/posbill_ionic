import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingFormatPage } from './setting-format.page';

const routes: Routes = [
  {
    path: '',
    component: SettingFormatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingFormatPageRoutingModule {}

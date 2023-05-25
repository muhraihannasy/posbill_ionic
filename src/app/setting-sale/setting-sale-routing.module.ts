import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingSalePage } from './setting-sale.page';

const routes: Routes = [
  {
    path: '',
    component: SettingSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingSalePageRoutingModule {}

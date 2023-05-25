import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlineShopPage } from './online-shop.page';

const routes: Routes = [
  {
    path: '',
    component: OnlineShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineShopPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscountAddPage } from './discount-add.page';

const routes: Routes = [
  {
    path: '',
    component: DiscountAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscountAddPageRoutingModule {}

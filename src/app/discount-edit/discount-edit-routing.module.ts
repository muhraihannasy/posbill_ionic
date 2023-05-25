import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscountEditPage } from './discount-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DiscountEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscountEditPageRoutingModule {}

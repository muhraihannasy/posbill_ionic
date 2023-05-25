import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectDiscountPage } from './select-discount.page';

const routes: Routes = [
  {
    path: '',
    component: SelectDiscountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectDiscountPageRoutingModule {}

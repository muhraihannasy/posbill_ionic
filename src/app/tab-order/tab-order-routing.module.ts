import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabOrderPage } from './tab-order.page';

const routes: Routes = [
  {
    path: '',
    component: TabOrderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabOrderPageRoutingModule {}

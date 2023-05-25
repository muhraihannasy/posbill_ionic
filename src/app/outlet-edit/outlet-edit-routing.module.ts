import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutletEditPage } from './outlet-edit.page';

const routes: Routes = [
  {
    path: '',
    component: OutletEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutletEditPageRoutingModule {}

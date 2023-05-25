import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InactivePage } from './inactive.page';

const routes: Routes = [
  {
    path: '',
    component: InactivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InactivePageRoutingModule {}

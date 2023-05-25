import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportSalesPage } from './report-sales.page';

const routes: Routes = [
  {
    path: '',
    component: ReportSalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportSalesPageRoutingModule {}

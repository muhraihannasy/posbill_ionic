import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabDashboardPage } from './tab-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: TabDashboardPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabDashboardPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabCatalogPage } from './tab-catalog.page';

const routes: Routes = [
  {
    path: '',
    component: TabCatalogPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabCatalogPageRoutingModule {}

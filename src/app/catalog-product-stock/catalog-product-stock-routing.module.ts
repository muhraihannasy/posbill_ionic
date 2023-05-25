import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogProductStockPage } from './catalog-product-stock.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogProductStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogProductStockPageRoutingModule {}

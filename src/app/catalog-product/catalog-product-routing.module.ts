import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogProductPage } from './catalog-product.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogProductPageRoutingModule {}

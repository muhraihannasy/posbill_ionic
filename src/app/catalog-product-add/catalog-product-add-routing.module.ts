import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogProductAddPage } from './catalog-product-add.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogProductAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogProductAddPageRoutingModule {}
